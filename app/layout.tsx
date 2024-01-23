import type { Metadata } from 'next';
import './globals.scss';
import Navbar from './components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Family Services',
  description: 'Mon app Family Services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true} className="kanit">
        <header>
          <Link href="/">
            <h1 className="surfer p-1 text-center">Family Services</h1>
          </Link>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
