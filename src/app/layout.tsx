import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Sofia_Sans_Extra_Condensed, Unbounded } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.scss';
import { LenisScrollProvider } from './providers/lenis-provider';

export const metadata: Metadata = {
  title: 'Креативное Digital Агенство Pixel',
  description:
    '14 лет успешно помогаем бизнесу решать задачи с помощью маркетинговых инструментов.',
};

const sofiaSans = Sofia_Sans_Extra_Condensed({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sofia-sans',
});
const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={clsx(unbounded.className, sofiaSans.variable)}>
      <body>
        <LenisScrollProvider>
          <Header />
          {children}
          <Footer />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
