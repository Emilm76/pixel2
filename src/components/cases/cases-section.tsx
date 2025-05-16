'use client';
import { CASES, CasesModalData, DEFAULT_MODAL_DATA } from '@/app/constants';
import { Case } from '@/components/cases/case';
import { CasesFilter } from '@/components/cases/case-filter';
import { ButtonArrow } from '@/ui/button/button-arrow';
import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import { useState } from 'react';
import { ModalCase } from '../modal/modal-case';
import styles from './cases-section.module.scss';

const ITEMS_PER_PAGE_MAP = {
  '1': 4,
  '2': 8,
  '3': 4,
};

const HEADER_MAP = {
  '1': (
    <>
      <h2 className={clsx(styles.title, 'h3 h-pb')}>
        Каждый проект в нашей компании — это комплекс услуг от А до Я, который
        включает{' '}
        <span className="purple">
          аналитику, проектирование, дизайн, разработку
        </span>{' '}
        и вывод продукта на рынок.
      </h2>
      <div className={styles.header1}>
        <CasesFilter />
        <ButtonPrimary href="/cases" text="Все кейсы" />
      </div>
    </>
  ),
  '2': <CasesFilter />,
  '3': (
    <div className={styles.header3}>
      <h2 className="h2">
        Наши <span className="purple">кейсы</span>
      </h2>
      <ButtonPrimary href="/cases" text="Все кейсы" />
    </div>
  ),
};

export function CasesSection({
  headerVariant = '1',
}: {
  headerVariant?: '1' | '2' | '3';
}) {
  const itemsPerPage = ITEMS_PER_PAGE_MAP[headerVariant];
  const header = HEADER_MAP[headerVariant];

  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<CasesModalData | null>(null);

  function handleLoadMore() {
    setVisibleCount((prev) => prev + itemsPerPage);
  }

  function openModal(modalData: CasesModalData) {
    setModalData(modalData);
    setIsModalOpen(true);
  }

  function closeModal() {
    setModalData(DEFAULT_MODAL_DATA);
    setIsModalOpen(false);
  }

  const visibleCases = CASES.slice(0, visibleCount);
  const hasMore = visibleCount < CASES.length;

  return (
    <section className="section-pt">
      <div className="container">{header}</div>

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
