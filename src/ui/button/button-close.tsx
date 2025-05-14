import { CloseCrossIcon } from '@/images/icons/close-cross';
import { CloseCubesIcon } from '@/images/icons/close-cubes';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './button-close.module.scss';

export function ButtonClose({
  className,
  ...props
}: {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      <CloseCubesIcon className={styles.iconCubes} />
      <CloseCrossIcon className={styles.iconCross} />
    </button>
  );
}
