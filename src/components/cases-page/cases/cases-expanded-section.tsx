'use client';
import { CASES } from '@/app/constants';
import { Case } from '@/components/cases/case';
import { CasesFilter } from '@/components/cases/case-filter';
import { ButtonArrow } from '@/ui/button/button-arrow';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './cases-expanded-section.module.scss';

const ITEMS_PER_PAGE = 8;

export function CasesExpandedSection() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleCases = CASES.slice(0, visibleCount);
  const hasMore = visibleCount < CASES.length;

  return (
    <section className="section-pt-3">
      <div className="container">
        <CasesFilter />
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
