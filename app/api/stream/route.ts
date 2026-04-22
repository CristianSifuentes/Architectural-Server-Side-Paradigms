import { NextRequest } from 'next/server';
import { formatSseEvent } from '@/lib/sse/event-format';
import { appLogger } from '@/lib/observability/logger';

export const runtime = 'edge';

function headers() {
  return {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  };
}

// SSE endpoint running on the edge for low-latency one-way updates.
export async function GET(_request: NextRequest) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const send = (event: string, data: unknown) => {
        controller.enqueue(encoder.encode(formatSseEvent(event, data)));
      };

      send('ready', { ok: true, connectedAt: Date.now() });

      const intervalId = setInterval(() => {
        const now = Date.now();
        send('tick', {
          id: crypto.randomUUID(),
          ts: now,
          level: now % 2 === 0 ? 'ok' : 'warn',
          message: now % 2 === 0 ? 'Edge stream healthy' : 'High p95 latency detected',
        });
      }, 3000);

      appLogger.info('SSE connection opened');

      return () => {
        clearInterval(intervalId);
        appLogger.info('SSE connection closed');
      };
    },
  });

  return new Response(stream, { headers: headers() });
}
