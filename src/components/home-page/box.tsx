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
import { useEffect, useRef, useState } from 'react';
import styles from './box.module.scss';

// Types
type CubeTransform = {
  x: number;
  y: number;
};

type CubeConfig = {
  node: React.ReactElement;
  parallaxSpeed: number;
  className: string;
};

type MediaQueryConfig = {
  leftSide: CubeTransform;
  topSide: CubeTransform;
  bottomSide: CubeTransform;
  cubes: CubeTransform[];
};

// Constants
const BOX_TRANSFORMS: Record<string, CubeTransform> = {
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

const MEDIA_QUERY_CONFIGS: Record<string, MediaQueryConfig> = {
  mobile: {
    leftSide: { x: -210, y: 0 },
    topSide: { x: 130, y: -200 },
    bottomSide: { x: 110, y: 190 },
    cubes: [
      { x: -80, y: 200 },
      { x: -90, y: -104 },
      { x: 90, y: -244 },
      { x: -70, y: 10 },
      { x: -80, y: -240 },
      { x: 79, y: -90 },
      { x: 144, y: 87 },
    ],
  },
  tablet: {
    leftSide: { x: -120, y: 10 },
    topSide: { x: 130, y: -210 },
    bottomSide: { x: 160, y: 170 },
    cubes: [
      { x: -100, y: 260 },
      { x: -250, y: -140 },
      { x: 180, y: -280 },
      { x: -70, y: 0 },
      { x: -110, y: -310 },
      { x: 190, y: 100 },
      { x: 170, y: 80 },
    ],
  },
  tablet2: {
    leftSide: { x: -260, y: 120 },
    topSide: { x: 160, y: -80 },
    bottomSide: { x: 100, y: 170 },
    cubes: [
      { x: -150, y: 250 },
      { x: -260, y: -80 },
      { x: 80, y: -120 },
      { x: -90, y: 0 },
      { x: -132, y: -90 },
      { x: 200, y: 190 },
      { x: 140, y: 120 },
    ],
  },
  tablet3: {
    leftSide: { x: -309, y: 84 },
    topSide: { x: 160, y: -116 },
    bottomSide: { x: 117, y: 113 },
    cubes: [
      { x: -150, y: 290 },
      { x: -290, y: -110 },
      { x: 130, y: -130 },
      { x: -200, y: 20 },
      { x: -169, y: -110 },
      { x: 160, y: 170 },
      { x: 185, y: 130 },
    ],
  },
  desktop: {
    leftSide: BOX_TRANSFORMS.ml,
    topSide: BOX_TRANSFORMS.mt,
    bottomSide: BOX_TRANSFORMS.mb,
    cubes: [
      BOX_TRANSFORMS.cube1,
      BOX_TRANSFORMS.cube2,
      BOX_TRANSFORMS.cube3,
      BOX_TRANSFORMS.cube4,
      BOX_TRANSFORMS.cube5,
      BOX_TRANSFORMS.cube6,
      BOX_TRANSFORMS.cube7,
    ],
  },
  desktopSmall: {
    leftSide: BOX_TRANSFORMS.ml,
    topSide: BOX_TRANSFORMS.mt,
    bottomSide: BOX_TRANSFORMS.mb,
    cubes: [
      { ...BOX_TRANSFORMS.cube1, y: BOX_TRANSFORMS.cube1.y * 0.8 },
      { ...BOX_TRANSFORMS.cube2, y: BOX_TRANSFORMS.cube2.y * 0.8 },
      { ...BOX_TRANSFORMS.cube3, y: BOX_TRANSFORMS.cube3.y * 0.8 },
      { ...BOX_TRANSFORMS.cube4, y: BOX_TRANSFORMS.cube4.y * 0.8 },
      { ...BOX_TRANSFORMS.cube5, y: BOX_TRANSFORMS.cube5.y * 0.8 },
      { ...BOX_TRANSFORMS.cube6, y: BOX_TRANSFORMS.cube6.y * 0.8 },
      { ...BOX_TRANSFORMS.cube7, y: BOX_TRANSFORMS.cube7.y * 0.8 },
    ],
  },
};

const cubesList: CubeConfig[] = [
  {
    node: <Cube1 />,
    parallaxSpeed: 0.05,
    className: styles.cube1,
  },
  {
    node: <Cube2 />,
    parallaxSpeed: 0.05,
    className: styles.cube2,
  },
  {
    node: <Cube3 />,
    parallaxSpeed: 0.07,
    className: styles.cube3,
  },
  {
    node: <Cube4 />,
    parallaxSpeed: 0.085,
    className: styles.cube4,
  },
  {
    node: <Image src={Cube5Img} alt="" />,
    parallaxSpeed: 0.035,
    className: styles.cube5,
  },
  {
    node: <Image src={Cube6Img} alt="" />,
    parallaxSpeed: 0.04,
    className: styles.cube6,
  },
  {
    node: <Image src={Cube7Img} alt="" />,
    parallaxSpeed: 0.03,
    className: styles.cube7,
  },
];

const ANIMATION_CONFIG = {
  mainCube: {
    opacity: 0,
    duration: 1.5,
    ease: 'back.inOut(1.7)',
  },
  cube: {
    duration: 1.5,
    ease: 'back.inOut(1.7)',
  },
};

export function BoxAnimation() {
  const main = useRef<HTMLDivElement>(null);
  const baseTransforms = useRef<Map<string, CubeTransform>>(new Map());
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const applyAnimations = (config: MediaQueryConfig) => {
        setIsAnimationComplete(false);

        const animations = [
          gsap.to('.leftSide', {
            ...config.leftSide,
            ...ANIMATION_CONFIG.mainCube,
          }),
          gsap.to('.topSide', {
            ...config.topSide,
            ...ANIMATION_CONFIG.mainCube,
          }),
          gsap.to('.bottomSide', {
            ...config.bottomSide,
            ...ANIMATION_CONFIG.mainCube,
          }),
          ...config.cubes.map((transform, index) => {
            const className = cubesList[index].className;
            baseTransforms.current.set(className, transform);
            return gsap.to(`.${className}`, {
              ...transform,
              ...ANIMATION_CONFIG.cube,
            });
          }),
        ];

        Promise.all(animations.map((anim) => anim.then())).then(() => {
          setIsAnimationComplete(true);
        });
      };

      mm.add('(max-width: 767px)', () =>
        applyAnimations(MEDIA_QUERY_CONFIGS.mobile)
      );
      mm.add('(min-width: 768px) and (max-width: 1023px)', () =>
        applyAnimations(MEDIA_QUERY_CONFIGS.tablet)
      );
      mm.add('(min-width: 1024px) and (max-width: 1299px)', () => {
        applyAnimations(MEDIA_QUERY_CONFIGS.tablet2);
      });
      mm.add('(min-width: 1300px) and (max-width: 1599px)', () => {
        applyAnimations(MEDIA_QUERY_CONFIGS.tablet3);
      });
      mm.add('(min-width: 1600px) and (min-height: 1000px)', () =>
        applyAnimations(MEDIA_QUERY_CONFIGS.desktop)
      );
      mm.add('(min-width: 1600px) and (max-height: 999px)', () =>
        applyAnimations(MEDIA_QUERY_CONFIGS.desktopSmall)
      );
    },
    { scope: main }
  );

  useEffect(() => {
    if (!isAnimationComplete) return;

    const cubesNodeList: HTMLElement[] = gsap.utils.toArray(`.${styles.cube}`);
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cubesNodeList.forEach((cube, index) => {
        const speed = cubesList[index].parallaxSpeed;
        const className = cubesList[index].className;
        const parallaxX = (mouseX - window.innerWidth / 2) * speed;
        const parallaxY = (mouseY - window.innerHeight / 2) * speed;

        const baseTransform = baseTransforms.current.get(className) || {
          x: 0,
          y: 0,
        };

        gsap.to(cube, {
          x: baseTransform.x + parallaxX,
          y: baseTransform.y + parallaxY,
          duration: 0.75,
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isAnimationComplete]);

  return (
    <div className={styles.wrapper} ref={main}>
      {cubesList.map((cube, index) => (
        <div className={clsx(styles.cube, cube.className)} key={index}>
          {cube.node}
        </div>
      ))}

      <CubeLeftSide className={clsx(styles.leftSide, 'leftSide')} />
      <CubeTopSide className={clsx(styles.topSide, 'topSide')} />
      <CubeBottomSide className={clsx(styles.bottomSide, 'bottomSide')} />
    </div>
  );
}
