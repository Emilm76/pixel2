import { ButtonArrow } from '@/ui/button/button-arrow';
import clsx from 'clsx';
import styles from './button-back.module.scss';

export function ButtonBack({ href }: { href: string }) {
  return (
    <div className={clsx(styles.container, 'container p1')}>
      <ButtonArrow
        className={styles.button}
        href={href}
        text="Назад"
        variant="left"
      />
    </div>
  );
}
