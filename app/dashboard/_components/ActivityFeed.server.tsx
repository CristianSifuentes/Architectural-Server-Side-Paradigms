import Card from '@/components/ui/Card';
import { listRecentActivity } from '@/lib/data/repository';

// Another async RSC. By fetching directly on the server, we avoid client waterfalls.
export default async function ActivityFeed() {
  const events = await listRecentActivity();

  return (
    <Card title="Recent Activity (RSC)">
      <ul>
        {events.map((item) => (
          <li key={item.id}>
            <strong>{item.actor}</strong> {item.action} ·{' '}
            <small>{new Date(item.at).toLocaleTimeString()}</small>
          </li>
        ))}
      </ul>
    </Card>
  );
}
