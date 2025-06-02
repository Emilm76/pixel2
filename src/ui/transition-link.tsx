'use client';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';

export function TransitionLink({
  children,
  href,
  className,
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
} & LinkProps) {
  const router = useRouter();

  async function handleTransition(e: MouseEvent) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <Link
      className={className}
      href={href}
      onClick={handleTransition}
      {...props}
    >
      {children}
    </Link>
  );
}
