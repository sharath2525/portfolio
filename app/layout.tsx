import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sharath-chandra-portfolio.sharathprvtairdrops.chatgpt.site'),
  title: 'Sharath Chandra — GenAI & Automation Engineer',
  description:
    'Portfolio of Donthula Sharath Chandra, a software engineer building GenAI systems, workflow automation, backend APIs, and dependable production solutions.',
  openGraph: {
    title: 'Sharath Chandra — GenAI & Automation Engineer',
    description:
      'GenAI systems, workflow automation, backend APIs, and dependable production engineering.',
    type: 'website',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Sharath Chandra — GenAI, Automation, Software Engineering' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharath Chandra — GenAI & Automation Engineer',
    description:
      'GenAI systems, workflow automation, backend APIs, and dependable production engineering.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
