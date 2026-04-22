import MetricsSkeleton from './_components/MetricsSkeleton';

export default function DashboardLoading() {
  return (
    <main className="container grid">
      <MetricsSkeleton title="Loading revenue" />
      <MetricsSkeleton title="Loading activity" />
      <MetricsSkeleton title="Loading live alerts" />
    </main>
  );
}
