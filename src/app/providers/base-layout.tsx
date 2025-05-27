import '@/app/globals.scss';
import { LenisScrollProvider } from '@/app/providers/lenis-provider';
import StoreProvider from '@/app/providers/store-provider';
import clsx from 'clsx';
import { Sofia_Sans_Extra_Condensed, Unbounded } from 'next/font/google';
import { ReactNode } from 'react';

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

export function BaseLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={clsx(unbounded.className, sofiaSans.variable)}>
      <body>
        <StoreProvider>
          <LenisScrollProvider>{children}</LenisScrollProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
