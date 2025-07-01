'use client';
import Link, { LinkProps } from 'next/link';
// import { useRouter } from 'next/navigation';
import { AnchorHTMLAttributes, ReactNode } from 'react';

export function TransitionLink({
  children,
  href,
  className,
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>) {
  // const router = useRouter();

  // async function handleTransition(e: MouseEvent) {
  //   e.preventDefault();
  //   router.push(href);
  // }

  if (props.target === '_blank') {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      // onClick={handleTransition}
      {...props}
    >
      {children}
    </Link>
  );
}
