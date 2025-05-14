'use client';
import { Form } from '@/components/form/form';
import {
  hideModal,
  selectModalVisibility,
} from '@/lib/features/modal/modal-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import clsx from 'clsx';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { ButtonClose } from '../../ui/button/button-close';
import styles from './modal.module.scss';

export function Modal() {
  const isOpen = useAppSelector(selectModalVisibility);
  const dispatch = useAppDispatch();
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
        className={clsx(styles.modal, isOpen && styles.open)}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            dispatch(hideModal());
          }
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ButtonClose
              className={styles.buttonClose}
              onClick={() => dispatch(hideModal())}
            />
            <div className="h3">
              Оставьте контактные данные, менеджер свяжется с вами
            </div>
            {/* <div className={clsx(styles.subtitle, 'p1 purple')}>
              Оставьте заявку, менеджер свяжется с вами
            </div> */}

            <div className={styles.form}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
