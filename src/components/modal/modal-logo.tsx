'use client';
import { useAppSelector } from '@/lib/hooks';
import { ButtonClose } from '@/ui/button/button-close';
import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import { useLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';
import styles from './modal-logo.module.scss';

export function ModalLogo({
  isOpen,
  closeModalCallback,
  modalData,
  svg,
  text,
}: {
  isOpen: boolean;
  closeModalCallback: () => void;
  modalData: [string, string];
  svg: ReactNode | null;
  text: string;
}) {
  const companyForm = useAppSelector((state) => state.companyForm);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (isOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.start();
    };
  }, [isOpen, lenis]);

  return (
    <>
      <div className={clsx(styles.shadow, isOpen && styles.open)}></div>
      <div
        className={clsx(styles.modal, 'modal', isOpen && styles.open)}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeModalCallback();
          }
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ButtonClose
              className={styles.buttonClose}
              onClick={closeModalCallback}
            />
            <div className={clsx(styles.container, 'container')}>
              <h3 className={clsx(styles.title, 'h3 dark')}>
                Логотип <span className="purple">на носителях</span>
              </h3>
              <div className={styles.buttons}>
                <ButtonPrimary text="Скачать презентацию" />
                <ButtonPrimary text="Скачать логотип" />
              </div>

              <div className={styles.images}>
                <div
                  className={clsx(styles.image, styles.image1)}
                  style={{
                    background: modalData[0],
                    fill: modalData[1],
                    color: modalData[1],
                  }}
                >
                  {svg}
                  <p className="h3">{text}</p>
                </div>
                <div
                  className={clsx(styles.image, styles.image2)}
                  style={{
                    background: modalData[1],
                    fill: modalData[0],
                    color: modalData[0],
                  }}
                >
                  {svg}
                  <p className="h3">{text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
