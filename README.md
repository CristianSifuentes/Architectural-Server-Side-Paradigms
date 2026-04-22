# Advanced React Architecture (Real Project)

This repository now contains a **real runnable Next.js project** implementing:

- React Server Components (RSC)
- Streaming SSR with Suspense
- Edge runtime route rendering
- Server-Sent Events (SSE)
- React Compiler-ready architecture mindset

## Quick Start

```bash
npm install
npm run dev
```

Then open: `http://localhost:3000` and navigate to `/dashboard`.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  dashboard/
    page.tsx
    loading.tsx
    _components/
      RevenuePanel.server.tsx
      ActivityFeed.server.tsx
      AlertsClient.client.tsx
      MetricsSkeleton.tsx
  api/
    stream/route.ts
    health/route.ts
lib/
  data/
  sse/
  observability/
  validation/
components/
  ui/
  charts/
```

## Learning Reference

The full didactic guide remains available in:

- `docs/ADVANCED_REACT_EDGE_BLUEPRINT.md`
