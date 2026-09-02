import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { siteUrl } from './site-config';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sharath Chandra | Software Engineer — Applied GenAI & AI Automation',
  description:
    'Portfolio of Sharath Chandra, a software engineer building applied GenAI products, RAG applications, AI agents, LLM-powered tools, workflow automation, and reliable production systems.',
  keywords: ['software engineer', 'GenAI engineer', 'applied AI engineer', 'AI automation engineer', 'LLM application engineer', 'LLM evaluation', 'prompt engineering', 'generative AI', 'RAG', 'AI agents', 'LangChain', 'LangGraph', 'n8n', 'Python automation'],
  authors: [{ name: 'Donthula Sharath Chandra', url: siteUrl }],
  creator: 'Donthula Sharath Chandra',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Sharath Chandra | Software Engineer — Applied GenAI & AI Automation',
    description:
      'Applied GenAI products, RAG applications, AI agents, workflow automation, and production reliability.',
    type: 'website',
    url: siteUrl,
    siteName: 'Sharath Chandra — Applied GenAI Portfolio',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Sharath Chandra — GenAI, Automation, Software Engineering' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharath Chandra | Software Engineer — Applied GenAI & AI Automation',
    description:
      'Applied GenAI products, RAG applications, AI agents, workflow automation, and production reliability.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
