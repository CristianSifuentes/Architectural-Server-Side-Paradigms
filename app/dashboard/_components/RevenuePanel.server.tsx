import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import MiniTrend from '@/components/charts/MiniTrend.client';
import { getRevenueSummary } from '@/lib/data/repository';
import { withServerTiming } from '@/lib/observability/server-timing';

// Async RSC: executes on server only, so database/service calls never reach the client bundle.
export default async function RevenuePanel() {
  const summary = await withServerTiming('revenue_query_ms', getRevenueSummary);

  return (
    <Card title="Revenue (RSC)">
      <p>
        Total Revenue: <strong>${summary.total.toLocaleString()}</strong>
      </p>
      <p>
        Monthly Growth: <strong>{summary.growthPct}%</strong>
      </p>
      <Badge tone={summary.growthPct >= 0 ? 'ok' : 'warn'}>
        {summary.growthPct >= 0 ? 'Healthy trend' : 'Review required'}
      </Badge>
      <MiniTrend points={summary.trend} />
    </Card>
  );
}
