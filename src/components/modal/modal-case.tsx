'use client';
import { CaseModalData } from '@/app/constants';
import { LoaderIcon } from '@/images/icons/loader';
import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ButtonClose } from '../../ui/button/button-close';
import styles from './modal-case.module.scss';

export function ModalCase({
  isOpen,
  closeModalCallback,
  modalData,
}: {
  isOpen: boolean;
  closeModalCallback: () => void;
  modalData: CaseModalData | null;
}) {
  const lenis = useLenis();
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsImageLoading(true);
    }
  }, [isOpen]);

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

  if (!modalData) return;

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
              <h3 className={clsx(styles.title, 'h3')}>
                {modalData.title[0]}{' '}
                <span className="purple">{modalData.title[1]}</span>
              </h3>
              <div className={styles.text}>
                <p>{modalData.description}</p>
                {modalData.siteHref && (
                  <ButtonPrimary
                    className={styles.buttonSite}
                    href={modalData.siteHref}
                    target="_blank"
                    text="Ссылка на сайт"
                  />
                )}
              </div>
            </div>

            {isImageLoading && (
              <div className={styles.loaderWrapper}>
                <LoaderIcon className={styles.loader} />
              </div>
            )}
            {modalData.image && (
              <Image
                className={clsx(styles.image, isImageLoading && styles.loading)}
                src={modalData.image}
                width={1410}
                onLoadingComplete={() => setIsImageLoading(false)}
                onLoad={() => setIsImageLoading(false)}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
