'use client';
import {
  CASES,
  CaseModalData,
  DEFAULT_MODAL_DATA,
  Filter,
} from '@/app/constants';
import { Case } from '@/components/cases/case';
import { CasesFilter } from '@/components/cases/case-filter';
import { ButtonArrow } from '@/ui/button/button-arrow';
import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CasesTitle } from '../home-page/cases-title';
import { ModalCase } from '../modal/modal-case';
import styles from './cases-section.module.scss';

const ITEMS_PER_PAGE_MAP = {
  '1': 4,
  '2': 8,
  '3': 4,
};
const SELECTED_FILTER_MAP: { [key: string]: Filter } = {
  '1': 'all', //'web',
  '2': 'all',
  '3': 'all', //'web',
};

export function CasesSection({
  headerVariant = '1',
}: {
  headerVariant?: '1' | '2' | '3';
}) {
  const itemsPerPage = ITEMS_PER_PAGE_MAP[headerVariant];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<CaseModalData | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Filter>(
    SELECTED_FILTER_MAP[headerVariant]
  );
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const [filteredCases, setFilteredCases] = useState(CASES);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredCases(CASES);
    } else {
      setFilteredCases(
        CASES.filter((item) =>
          item.categories.find((filter) => filter === selectedFilter)
        )
      );
    }
  }, [selectedFilter, visibleCount]);

  function handleLoadMore() {
    setVisibleCount((prev) => prev + itemsPerPage);
  }

  function openModal(modalData: CaseModalData) {
    setModalData(modalData);
    setIsModalOpen(true);
  }

  function closeModal() {
    setModalData(DEFAULT_MODAL_DATA);
    setIsModalOpen(false);
  }

  function handleFilterClick(value: Filter) {
    setSelectedFilter(value);

    setVisibleCount(itemsPerPage);
  }

  console.log('aaa');

  const visibleCases = filteredCases.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCases.length;

  const HEADER_MAP = {
    '1': (
      <CasesTitle>
        <div className={styles.header1}>
          <CasesFilter
            // hideAll={true}
            selectedFilter={selectedFilter}
            callback={handleFilterClick}
          />
          <ButtonPrimary href="/cases" text="Все кейсы" />
        </div>
      </CasesTitle>
    ),
    '2': (
      <div className="container">
        <CasesFilter
          // hideAll={true}
          selectedFilter={selectedFilter}
          callback={handleFilterClick}
        />
      </div>
    ),
    '3': (
      <div className={clsx(styles.header3, 'container')}>
        <h2 className="h2">
          Наши <span className="purple">кейсы</span>
        </h2>
        <ButtonPrimary href="/cases" text="Все кейсы" />
      </div>
    ),
  };

  const header = HEADER_MAP[headerVariant];

  return (
    <section className="section-pt">
      {header}

      <div className={clsx(styles.grid, 'container')}>
        {visibleCases.map((caseItem) => (
          <Case
            image={caseItem.image}
            name={caseItem.name}
            labels={caseItem.labels}
            onClick={() => openModal(caseItem.modal)}
            key={caseItem.name}
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

      <ModalCase
        modalData={modalData}
        isOpen={isModalOpen}
        closeModalCallback={closeModal}
      />
    </section>
  );
}
