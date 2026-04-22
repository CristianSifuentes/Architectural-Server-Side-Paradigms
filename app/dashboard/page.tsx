import { Suspense } from 'react';
import RevenuePanel from './_components/RevenuePanel.server';
import ActivityFeed from './_components/ActivityFeed.server';
import AlertsClient from './_components/AlertsClient.client';
import MetricsSkeleton from './_components/MetricsSkeleton';

export const runtime = 'edge';

// Server component route. Suspense boundaries allow Next.js to stream each section
// as soon as the data is available instead of waiting for the slowest query.
export default function DashboardPage() {
  return (
    <main className="container grid">
      <Suspense fallback={<MetricsSkeleton title="Revenue panel" />}>
        <RevenuePanel />
      </Suspense>

      <Suspense fallback={<MetricsSkeleton title="Activity feed" />}>
        <ActivityFeed />
      </Suspense>

      <AlertsClient />
    </main>
  );
}
