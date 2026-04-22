export default function Badge({
  tone,
  children,
}: {
  tone: 'ok' | 'warn';
  children: React.ReactNode;
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
