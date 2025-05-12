import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Кейсы — Креативное Digital Агенство Pixel',
  description:
    '14 лет успешно помогаем бизнесу решать задачи с помощью маркетинговых инструментов.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
