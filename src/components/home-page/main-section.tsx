'use client';
import { ButtonPrimary } from '@/ui/button/button-primary';
import { Label } from '@/ui/label/label';
import clsx from 'clsx';
import { useState } from 'react';
import { Modal } from '../modal/modal';
import { BoxAnimation } from './box';
import styles from './main-section.module.scss';

export function MainSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.section}>
        <div className={clsx(styles.container, 'container')}>
          <div className={styles.textBlock}>
            <h1 className={clsx(styles.title, 'h1')}>
              Digital-агентство полного цикла
            </h1>
            <div className={clsx(styles.subtitle, 'subtitle')}>
              экспертиза более 14 лет в сфере недвижимости
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.labelList}>
              <Label>лидогенерация</Label>
              <Label>вэб-разработка</Label>
              <Label>брендинг</Label>
            </div>

            <ButtonPrimary
              onClick={() => setIsModalOpen(true)}
              text="Оставить заявку"
            />
          </div>
        </div>
        <BoxAnimation />
      </section>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
