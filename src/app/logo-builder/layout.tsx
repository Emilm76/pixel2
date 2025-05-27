import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Генератор логотипов — Креативное Digital Агенство Pixel',
  description:
    '14 лет успешно помогаем бизнесу решать задачи с помощью маркетинговых инструментов.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
