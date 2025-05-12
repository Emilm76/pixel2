'use client';
import { ViaTourismIcon } from '@/images/icons/via-tourism';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './colors-slider.module.scss';

export function ColorsSlider() {
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChange((lastState) => !lastState);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx(styles.wrapper, isChange && styles.variant2)}>
      <div className={styles.logo}>
        <ViaTourismIcon />
      </div>
      <div className={styles.logo}>
        <ViaTourismIcon />
      </div>
      <div className={styles.logo}>
        <ViaTourismIcon />
      </div>
      <div className={styles.logo}>
        <ViaTourismIcon />
      </div>
    </div>
  );
}
