import 'server-only';
import { fetchRecentActivity, fetchRevenueSummary } from './mock-source';

// This repository is server-only by design. It centralizes data reads and protects
// internal services from accidental usage in client bundles.
export async function getRevenueSummary() {
  return fetchRevenueSummary();
}

export async function listRecentActivity() {
  return fetchRecentActivity();
}
