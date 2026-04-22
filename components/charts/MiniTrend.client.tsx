'use client';

type MiniTrendProps = {
  points: number[];
};

// Tiny SVG line chart to keep charting lightweight for didactic purposes.
export default function MiniTrend({ points }: MiniTrendProps) {
  const width = 180;
  const height = 54;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(max - min, 1);

  const path = points
    .map((value, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * width;
      const normalized = (value - min) / range;
      const y = height - normalized * height;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} role="img" aria-label="Trend chart">
      <path d={path} fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
