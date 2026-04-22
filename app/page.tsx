import Link from 'next/link';
import Card from '@/components/ui/Card';

export default function HomePage() {
  return (
    <main className="container">
      <Card title="Project Overview">
        <p>
          This real project demonstrates React Server Components, streaming SSR, edge runtime,
          and server-sent events in a single architecture.
        </p>
        <p>
          Open the dashboard to see server-rendered metrics stream into the UI and receive live
          updates over SSE.
        </p>
        <Link href="/dashboard" className="button">
          Go to Dashboard
        </Link>
      </Card>
    </main>
  );
}
