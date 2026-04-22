import { z } from 'zod';

export const dashboardFilterSchema = z.object({
  window: z.enum(['1h', '24h', '7d']).default('24h'),
  region: z.string().optional(),
});

export type DashboardFilter = z.infer<typeof dashboardFilterSchema>;
