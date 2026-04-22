export default function MetricsSkeleton({ title }: { title: string }) {
  return (
    <section className="card" aria-busy="true" aria-label={title}>
      <h2>{title}</h2>
      <div className="skeleton" />
    </section>
  );
}
