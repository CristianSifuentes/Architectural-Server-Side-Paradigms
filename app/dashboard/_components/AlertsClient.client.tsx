'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { parseSsePayload } from '@/lib/sse/event-format';

type AlertEvent = {
  id: string;
  ts: number;
  level: 'ok' | 'warn';
  message: string;
};

// Browser-only subscriber for SSE stream. The rest of dashboard remains server components.
export default function AlertsClient() {
  const [events, setEvents] = useState<AlertEvent[]>([]);
  const [status, setStatus] = useState<'connecting' | 'online' | 'offline'>('connecting');

  useEffect(() => {
    const source = new EventSource('/api/stream');

    source.addEventListener('ready', () => setStatus('online'));

    source.addEventListener('tick', (event) => {
      const parsed = parseSsePayload((event as MessageEvent).data);
      if (!parsed.success) {
        return;
      }
      setEvents((prev) => [parsed.data, ...prev].slice(0, 12));
    });

    source.onerror = () => {
      setStatus('offline');
      source.close();
    };

    return () => source.close();
  }, []);

  const latest = events[0];

  return (
    <Card title="Live Alerts (SSE)">
      <p>
        Stream status: <Badge tone={status === 'online' ? 'ok' : 'warn'}>{status}</Badge>
      </p>

      {latest ? (
        <p>
          Latest: <strong>{latest.message}</strong>
        </p>
      ) : (
        <p>Waiting for events...</p>
      )}

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Badge tone={event.level}>{event.level}</Badge> {event.message} ·{' '}
            <small>{new Date(event.ts).toLocaleTimeString()}</small>
          </li>
        ))}
      </ul>
    </Card>
  );
}
