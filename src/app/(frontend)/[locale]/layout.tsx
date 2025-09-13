import { TypedLocale } from 'payload';

import React from 'react';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

import { AdminBar } from '@/components/AdminBar';
import { LivePreviewListener } from '@/components/LivePreviewListener';
import { Footer } from '@/globals/Footer/Component';
import { Header } from '@/globals/Header/Component';
import { routing } from '@/i18n/routing';
import { InitTheme } from '@/providers/Theme/InitTheme';
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph';
import { cn } from '@/utilities/ui';
import { Providers } from '@/providers';

import './globals.css';

import { getServerSideURL } from '@/utilities/getURL';

type Args = {
  children: React.ReactNode;
  params: Promise<{
    locale: TypedLocale;
  }>;
};

export default async function RootLayout({ children, params }: Args) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  if (locale) {
    setRequestLocale(locale);
  } else {
    notFound();
  }

  const { isEnabled } = await draftMode();
  const messages = await getMessages();

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            />
            <LivePreviewListener />

            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@polisagro',
  },
  manifest: '/site.webmanifest',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
