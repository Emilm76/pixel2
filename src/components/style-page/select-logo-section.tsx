'use client';
import logo1Img from '@/images/logos/1.jpg';
import logo10Img from '@/images/logos/10.jpg';
import logo11Img from '@/images/logos/11.jpg';
import logo12Img from '@/images/logos/12.jpg';
import logo2Img from '@/images/logos/2.jpg';
import logo3Img from '@/images/logos/3.jpg';
import logo4Img from '@/images/logos/4.jpg';
import logo5Img from '@/images/logos/5.jpg';
import logo6Img from '@/images/logos/6.jpg';
import logo8Img from '@/images/logos/8.jpg';
import logo9Img from '@/images/logos/9.jpg';
import { ButtonPrimaryMedia } from '@/ui/button/button-primary-media';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './select-logo-section.module.scss';

const logos = [
  logo1Img,
  logo2Img,
  logo3Img,
  logo4Img,
  logo5Img,
  logo6Img,
  logo8Img,
  logo9Img,
  logo10Img,
  logo11Img,
  logo12Img,
];

export function SelectLogoSection() {
  const [selectedLogos, setSelectedLogos] = useState<string[]>([]);

  const handleClick = (logo: string) => {
    console.log('click');

    setSelectedLogos((prev) => {
      const isIncludes = prev.includes(logo);
      return isIncludes ? prev.filter((l) => l !== logo) : [...prev, logo];
    });
  };

  useEffect(() => {
    console.log(selectedLogos);
  }, [selectedLogos]);

  return (
    <section className="section-pt-2">
      <div className="container">
        <h2 className="h2 h-pb">
          Выберите <span className="purple">эталонные</span> логотипы
        </h2>

        <div className={styles.grid}>
          {logos.map((image, index) => {
            return (
              <label className={styles.logoWrapper} key={index}>
                <div className={styles.logoContent}>
                  <Image src={image} width={283} height={274} alt="" />
                  <input
                    className={clsx(styles.checkbox, 'checkbox')}
                    onChange={() => handleClick(image.src)}
                    type="checkbox"
                    name="logo"
                  />
                </div>
              </label>
            );
          })}
        </div>

        <ButtonPrimaryMedia
          className={styles.buttonSubmit}
          href="/logo-builder/result"
          text="Сгенерировать логотип"
          mobileText="Сгенерировать"
        />
      </div>
    </section>
  );
}
