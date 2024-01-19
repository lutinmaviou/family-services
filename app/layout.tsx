import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Family Services',
  description: 'Mon suivi planning Family Services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>
        {children}
        <h1>Family Services</h1>
      </body>
    </html>
  );
}
