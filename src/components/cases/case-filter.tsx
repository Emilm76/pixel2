'use client';
import { Filter, FILTERS } from '@/app/constants';
import clsx from 'clsx';
import styles from './case-filter.module.scss';

export function CasesFilter({
  selectedFilter,
  hideAll = false,
  callback,
}: {
  selectedFilter: Filter;
  hideAll?: boolean;
  callback: (value: Filter) => void;
}) {
  return (
    <ul className={styles.grid} role="list">
      {FILTERS.map(({ label, value }) => {
        if (hideAll && value === 'all') return;

        return (
          <li
            key={value}
            className={clsx(value === selectedFilter && styles.checked)}
            onClick={() => callback(value)}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
}
