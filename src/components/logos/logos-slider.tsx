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
import clsx from 'clsx';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './logos-slider.module.scss';

const images = [
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

export function LogosSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll(),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => {
          return (
            <div className={clsx(styles.slide, 'embla__slide')} key={index}>
              <Image src={src} width={283} height={283} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
