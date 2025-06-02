import { ArrowRightIcon } from '@/images/icons/arrow-right';
import clsx from 'clsx';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { TransitionLink } from '../transition-link';
import styles from './button-arrow.module.scss';

export type ButtonArrowProps = { text: string } & ButtonArrowWrapperProps;

export function ButtonArrow({
  text,
  variant = 'right',
  className,
  ...props
}: ButtonArrowProps) {
  const classVariant =
    variant === 'right' ? styles.variantRight : styles.variantLeft;

  return (
    <ButtonArrowWrapper
      {...props}
      className={clsx(styles.button, classVariant, className, 'p1')}
    >
      <span>{text}</span>
      <div className={styles.icon}>
        <div className={styles.icon1}>
          <ArrowRightIcon className={styles.svg} />
        </div>
        <div className={styles.icon2}>
          <ArrowRightIcon className={styles.svg} />
        </div>
      </div>
    </ButtonArrowWrapper>
  );
}

type ButtonArrowWrapperProps =
  | ({
      href?: undefined;
      variant?: 'right' | 'left';
      className?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      href: string;
      variant?: 'right' | 'left';
      className?: string;
    } & AnchorHTMLAttributes<HTMLAnchorElement>);

function ButtonArrowWrapper({
  className,
  children,
  ...props
}: ButtonArrowWrapperProps) {
  if (props.href) {
    return (
      <TransitionLink
        href={props.href}
        className={className}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </TransitionLink>
    );
  }

  return (
    <button
      className={className}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
