export type RevenueSummary = {
  total: number;
  growthPct: number;
  trend: number[];
};

export type ActivityItem = {
  id: string;
  actor: string;
  action: string;
  at: string;
};

// Simulated server-side data source. Replace with DB calls in production.
export async function fetchRevenueSummary(): Promise<RevenueSummary> {
  await delay(450);
  return {
    total: 1284220,
    growthPct: 8.4,
    trend: [24, 36, 31, 40, 54, 61, 72],
  };
}

export async function fetchRecentActivity(): Promise<ActivityItem[]> {
  await delay(950);
  return [
    {
      id: 'a1',
      actor: 'Ops Bot',
      action: 'deployed edge canary in iad1',
      at: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    },
    {
      id: 'a2',
      actor: 'Data Pipeline',
      action: 'refreshed revenue aggregates',
      at: new Date(Date.now() - 6 * 60 * 1000).toISOString(),
    },
    {
      id: 'a3',
      actor: 'Alert Manager',
      action: 'closed stale incident #4482',
      at: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    },
  ];
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
