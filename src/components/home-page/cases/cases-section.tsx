'use client';
import { CASES } from '@/app/constants';
import { Case } from '@/components/cases/case';
import { CasesFilter } from '@/components/cases/case-filter';
import { ButtonArrow } from '@/ui/button/button-arrow';
import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './cases-section.module.scss';

const ITEMS_PER_PAGE = 4;

export function CasesSection() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleCases = CASES.slice(0, visibleCount);
  const hasMore = visibleCount < CASES.length;

  return (
    <section className="section-pt">
      <div className="container">
        <h2 className="h3 h-pb">
          Каждый проект в нашей компании — это комплекс услуг от А до Я, который
          включает{' '}
          <span className="purple">
            аналитику, проектирование, дизайн, разработку
          </span>{' '}
          и вывод продукта на рынок.
        </h2>

        <div className={styles.header}>
          <CasesFilter />
          <ButtonPrimary href="/cases" text="Все кейсы" />
        </div>
      </div>

      <div className={clsx(styles.grid, 'container')}>
        {visibleCases.map((caseItem) => (
          <Case
            image={caseItem.image}
            labels={caseItem.labels}
            name={caseItem.name}
            key={caseItem.id}
          />
        ))}
      </div>

      {hasMore && (
        <ButtonArrow
          className={styles.loadMoreBtn}
          text="Загрузить ещё"
          onClick={handleLoadMore}
        />
      )}
    </section>
  );
}
