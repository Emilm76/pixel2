'use client';
import { Cube1 } from '@/images/icons/cube-1';
import { Cube2 } from '@/images/icons/cube-2';
import { Cube3 } from '@/images/icons/cube-3';
import { Cube4 } from '@/images/icons/cube-4';
import Cube5Img from '@/images/icons/cube-5.png';
import Cube6Img from '@/images/icons/cube-6.png';
import Cube7Img from '@/images/icons/cube-7.png';
import { CubeBottomSide } from '@/images/icons/cube-bottom-side';
import { CubeLeftSide } from '@/images/icons/cube-left-side';
import { CubeTopSide } from '@/images/icons/cube-top-side';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './box.module.scss';

const boxTrs = {
  ml: { x: -400, y: 106 },
  mt: { x: 325, y: -130 },
  mb: { x: 283, y: 145 },
  cube1: { x: -330, y: 490 },
  cube2: { x: -420, y: -174 },
  cube3: { x: 220, y: -150 },
  cube4: { x: -220, y: 50 },
  cube5: { x: -250, y: -160 },
  cube6: { x: 180, y: 220 },
  cube7: { x: 120, y: 210 },
};

const cubesList = [
  {
    node: <Cube1 className={clsx(styles.cube1, 'cube cube1 ')} />,
    parallaxSpeed: 0.06,
  },
  {
    node: <Cube2 className={clsx(styles.cube2, 'cube cube2 ')} />,
    parallaxSpeed: 0.06,
  },
  {
    node: <Cube3 className={clsx(styles.cube3, 'cube cube3 ')} />,
    parallaxSpeed: 0.06,
  },
  {
    node: <Cube4 className={clsx(styles.cube4, 'cube cube4 ')} />,
    parallaxSpeed: 0.06,
  },
  {
    node: (
      <Image
        className={clsx(styles.cube5, 'cube cube5 ')}
        src={Cube5Img}
        alt=""
      />
    ),
    parallaxSpeed: 0.06,
  },
  {
    node: (
      <Image
        className={clsx(styles.cube6, 'cube cube6 ')}
        src={Cube6Img}
        alt=""
      />
    ),
    parallaxSpeed: 0.06,
  },
  {
    node: (
      <Image
        className={clsx(styles.cube7, 'cube cube7 ')}
        src={Cube7Img}
        alt=""
      />
    ),
    parallaxSpeed: 0.06,
  },
];

export function BoxAnimation() {
  const main = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const mainCubeConfig = {
        opacity: 0,
        duration: 1.5,
        ease: 'back.inOut(1.7)',
      };
      const cubeConfig = {
        duration: 1.5,
        ease: 'back.inOut(1.7)',
      };

      mm.add('(max-width: 767px)', () => {
        gsap.to('.leftSide', { x: -210, y: 0, ...mainCubeConfig });
        gsap.to('.topSide', { x: 130, y: -200, ...mainCubeConfig });
        gsap.to('.bottomSide', { x: 110, y: 190, ...mainCubeConfig });

        // плюс хедер по Y 78px
        gsap.to('.cube1', { x: -80, y: 200, ...cubeConfig });
        gsap.to('.cube2', { x: -90, y: -104, ...cubeConfig });
        gsap.to('.cube3', { x: 90, y: -244, ...cubeConfig });
        gsap.to('.cube4', { x: -70, y: 10, ...cubeConfig });

        gsap.to('.cube5', { x: -80, y: -240, ...cubeConfig });
        gsap.to('.cube6', { x: 79, y: -90, ...cubeConfig });
        gsap.to('.cube7', { x: 144, y: 87, ...cubeConfig });
      });
      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        gsap.to('.leftSide', { x: -120, y: 10, ...mainCubeConfig });
        gsap.to('.topSide', { x: 130, y: -210, ...mainCubeConfig });
        gsap.to('.bottomSide', { x: 160, y: 170, ...mainCubeConfig });

        gsap.to('.cube1', { x: -100, y: 260, ...cubeConfig });
        gsap.to('.cube2', { x: -250, y: -140, ...cubeConfig });
        gsap.to('.cube3', { x: 180, y: -280, ...cubeConfig });
        gsap.to('.cube4', { x: -70, y: 0, ...cubeConfig });

        gsap.to('.cube5', { x: -110, y: -310, ...cubeConfig });
        gsap.to('.cube6', { x: 190, y: 100, ...cubeConfig });
        gsap.to('.cube7', { x: 170, y: 80, ...cubeConfig });
      });
      mm.add('(min-width: 1024px) and (max-width: 1299px)', () => {
        gsap.to('.leftSide', { x: -260, y: 120, ...mainCubeConfig });
        gsap.to('.topSide', { x: 160, y: -80, ...mainCubeConfig });
        gsap.to('.bottomSide', { x: 100, y: 170, ...mainCubeConfig });

        gsap.to('.cube1', { x: -150, y: 250, ...cubeConfig });
        gsap.to('.cube2', { x: -260, y: -80, ...cubeConfig });
        gsap.to('.cube3', { x: 80, y: -120, ...cubeConfig });
        gsap.to('.cube4', { x: -90, y: 0, ...cubeConfig });
        gsap.to('.cube5', { x: -132, y: -90, ...cubeConfig });
        gsap.to('.cube6', { x: 200, y: 190, ...cubeConfig });
        gsap.to('.cube7', { x: 140, y: 120, ...cubeConfig });
      });
      mm.add('(min-width: 1300px) and (max-width: 1599px)', () => {
        gsap.to('.leftSide', { x: -309, y: 84, ...mainCubeConfig });
        gsap.to('.topSide', { x: 160, y: -116, ...mainCubeConfig });
        gsap.to('.bottomSide', { x: 117, y: 113, ...mainCubeConfig });

        gsap.to('.cube1', { x: -150, y: 290, ...cubeConfig });
        gsap.to('.cube2', { x: -290, y: -110, ...cubeConfig });
        gsap.to('.cube3', { x: 130, y: -130, ...cubeConfig });
        gsap.to('.cube4', { x: -200, y: 20, ...cubeConfig });
        gsap.to('.cube5', { x: -169, y: -110, ...cubeConfig });
        gsap.to('.cube6', { x: 160, y: 170, ...cubeConfig });
        gsap.to('.cube7', { x: 185, y: 130, ...cubeConfig });
      });
      mm.add('(min-width: 1600px) and (min-height: 1000px)', () => {
        gsap.to('.leftSide', { ...boxTrs.ml, ...mainCubeConfig });
        gsap.to('.topSide', { ...boxTrs.mt, ...mainCubeConfig });
        gsap.to('.bottomSide', { ...boxTrs.mb, ...mainCubeConfig });

        gsap.to('.cube1', { ...boxTrs.cube1, ...cubeConfig });
        gsap.to('.cube2', { ...boxTrs.cube2, ...cubeConfig });
        gsap.to('.cube3', { ...boxTrs.cube3, ...cubeConfig });
        gsap.to('.cube4', { ...boxTrs.cube4, ...cubeConfig });
        gsap.to('.cube5', { ...boxTrs.cube5, ...cubeConfig });
        gsap.to('.cube6', { ...boxTrs.cube6, ...cubeConfig });
        gsap.to('.cube7', { ...boxTrs.cube7, ...cubeConfig });
      });
      mm.add('(min-width: 1600px) and (max-height: 999px)', () => {
        gsap.to('.leftSide', { ...boxTrs.ml, ...mainCubeConfig });
        gsap.to('.topSide', { ...boxTrs.mt, ...mainCubeConfig });
        gsap.to('.bottomSide', { ...boxTrs.mb, ...mainCubeConfig });

        gsap.to('.cube1', {
          x: boxTrs.cube1.x,
          y: boxTrs.cube1.y * 0.8,
          ...cubeConfig,
        });
        gsap.to('.cube2', {
          x: boxTrs.cube2.x,
          y: boxTrs.cube2.y * 0.8,
          ...cubeConfig,
        });
        gsap.to('.cube3', {
          x: boxTrs.cube3.x,
          y: boxTrs.cube3.y * 0.8,
          ...cubeConfig,
        });
        gsap.to('.cube4', {
          x: boxTrs.cube4.x,
          y: boxTrs.cube4.y * 0.8,
          ...cubeConfig,
        });
        gsap.to('.cube5', {
          x: boxTrs.cube5.x,
          y: boxTrs.cube5.y * 0.8,
          ...cubeConfig,
        });
        gsap.to('.cube6', {
          x: boxTrs.cube6.x,
          y: boxTrs.cube6.y * 0.8,
          ...cubeConfig,
        });
        gsap.to('.cube7', {
          x: boxTrs.cube7.x,
          y: boxTrs.cube7.y * 0.8,
          ...cubeConfig,
        });
      });
    },
    { scope: main }
  );

  useEffect(() => {
    const cubesNodeList: HTMLElement[] = gsap.utils.toArray('.cube');

    document.addEventListener('mousemove', () => {
      console.log(cubesNodeList);
    });
  }, []);

  return (
    <div className={styles.wrapper} ref={main}>
      {cubesList.map((cube) => cube.node)}

      <CubeLeftSide className={clsx(styles.leftSide, 'leftSide')} />
      <CubeTopSide className={clsx(styles.topSide, 'topSide')} />
      <CubeBottomSide className={clsx(styles.bottomSide, 'bottomSide')} />
    </div>
  );
}
