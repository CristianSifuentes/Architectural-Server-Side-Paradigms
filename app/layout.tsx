import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Advanced React Architecture',
  description: 'RSC + Streaming SSR + Edge + SSE demo project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="container">
          <h1>Advanced React Architecture Demo</h1>
          <p className="subtitle">React Server Components • Streaming • Edge • SSE</p>
        </header>
        {children}
      </body>
    </html>
  );
}
