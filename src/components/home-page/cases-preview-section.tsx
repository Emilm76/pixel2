'use client';
import {
  CaseModalData,
  DEFAULT_MODAL_DATA,
  HERMITAGE_CASE_MODAL,
} from '@/app/constants';
import hermitageImg from '@/images/cases-preview/hermitage.jpg';
import moddImg from '@/images/cases-preview/modd.jpg';
import clsx from 'clsx';
import { useState } from 'react';
import { ModalCase } from '../modal/modal-case';
import { CasePreview } from './case-preview';
import styles from './cases-preview-section.module.scss';

export function CasesPreviewSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<CaseModalData | null>(null);

  function openModal(modalData: CaseModalData) {
    setModalData(modalData);
    setIsModalOpen(true);
  }

  function closeModal() {
    setModalData(DEFAULT_MODAL_DATA);
    setIsModalOpen(false);
  }

  return (
    <>
      <section className="section-pt">
        <div className="container">
          <h2 className="h2 h-pb">
            Подтверждаем результативность цифрами и 
            <span className="purple">успешными кейсам</span>
          </h2>
        </div>

        <div className={clsx(styles.grid, 'container')}>
          <CasePreview
            image={hermitageImg}
            title="WEB"
            text="Сайт жилого комплекса «Эрмитаж» – входит в ТОП-20 сайтов премии WOW AWARDS-2024"
            onClick={() => openModal(HERMITAGE_CASE_MODAL)}
          />
          <CasePreview
            image={moddImg}
            title="CONTEXT"
            text="Успешный кейс по работе с группой компаний «ЮгСтройИнвест», сертифицированный и подтверждённый Яндексом"
            onClick={() => openModal(HERMITAGE_CASE_MODAL)}
          />
        </div>
      </section>

      <ModalCase
        modalData={modalData}
        isOpen={isModalOpen}
        closeModalCallback={closeModal}
      />
    </>
  );
}
