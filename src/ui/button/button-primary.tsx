import { ArrowRight2Icon } from '@/images/icons/arrow-right-2';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './button-primary.module.scss';

export function ButtonPrimary({
  text,
  className,
  ...props
}: {
  text: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={clsx(styles.button, className)} {...props}>
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
    </button>
  );
}
