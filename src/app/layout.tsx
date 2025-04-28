import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Sofia_Sans_Extra_Condensed, Unbounded } from 'next/font/google';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Креативное Digital Агенство Pixel',
  description:
    '14 лет успешно помогаем бизнесу решать задачи с помощью маркетинговых инструментов.',
};

const sofiaSans = Sofia_Sans_Extra_Condensed({
  subsets: ['latin', 'cyrillic'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-sofia-sans-extra-condensed',
});
const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={clsx(unbounded.className, sofiaSans.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
