import { ArrowRight2Icon } from '@/images/icons/arrow-right-2';
import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styles from './button-primary.module.scss';

export type ButtonPrimaryProps =
  | ({
      href?: undefined;
      text?: string;
      className?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      href: string;
      text?: string;
      className?: string;
    } & AnchorHTMLAttributes<HTMLAnchorElement>);

export function ButtonPrimary({
  text,
  className,
  ...props
}: ButtonPrimaryProps) {
  return (
    <ButtonPrimaryWrapper className={className} {...props}>
      <div className={styles.wrapper}>
        <span className={styles.text}>{text}</span>
        <div className={styles.icon}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon1}>
              <ArrowRight2Icon className={styles.svg} />
            </div>
            <div className={styles.icon2}>
              <ArrowRight2Icon className={styles.svg} />
            </div>
          </div>
        </div>
      </div>
    </ButtonPrimaryWrapper>
  );
}

function ButtonPrimaryWrapper({
  className,
  children,
  ...props
}: ButtonPrimaryProps) {
  if (props.href) {
    return (
      <Link
        href={props.href}
        className={clsx(styles.button, className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx(styles.button, className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
