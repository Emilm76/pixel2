import clsx from 'clsx';
import styles from './label.module.scss';

export function Label({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={clsx(styles.label, className, 'p1')}>
      <span>{children}</span>
    </div>
  );
}
