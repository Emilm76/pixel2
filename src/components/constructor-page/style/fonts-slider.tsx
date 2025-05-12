'use client';
import abc1Img from '@/images/icons/abc-1.svg';
import abc2Img from '@/images/icons/abc-2.svg';
import abc3Img from '@/images/icons/abc-3.svg';
import abc4Img from '@/images/icons/abc-4.svg';
import abc5Img from '@/images/icons/abc-5.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './fonts-slider.module.scss';

const images = [abc1Img, abc2Img, abc3Img, abc4Img, abc5Img];

export function FontsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      {images.map((img, index) => (
        <Image
          className={index === currentIndex ? styles.visible : styles.hidden}
          src={img}
          key={index}
          alt=""
        />
      ))}
    </div>
  );
}
