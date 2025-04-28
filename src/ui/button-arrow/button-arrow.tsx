import clsx from 'clsx';
import styles from './button-arrow.module.scss';
import { ArrowRightIcon } from '@/images/icons/arrow-right';
import { ButtonHTMLAttributes } from 'react';

export function ButtonArrow({
  text,
  className,
  ...props
}: {
  text: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={clsx(styles.button, className, 'text-p1')}
      {...props}
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
    </button>
  );
}
