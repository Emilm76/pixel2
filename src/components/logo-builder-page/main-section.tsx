import cubeImg from '@/images/icons/cube.svg';
import clsx from 'clsx';
import Image from 'next/image';
import { CubeMouseMove } from '../cube-mouse-move';
import { LogosSlider } from '../logos/logos-slider';
import styles from './main-section.module.scss';

export function MainSection() {
  return (
    <section className={styles.section}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.textBlock}>
          <h1 className={clsx(styles.title, 'h3')}>
            Добро пожаловать на страницу бренд-конструктора студии Pixel².{' '}
            <span className="purple">
              Получите логотип вашей компании абсолютно бесплатно!
            </span>
          </h1>
          <div className={styles.subtitle}>
            Для владельцев малого и среднего бизнеса, блогеров, предпринимателей
            и всех, кому нужно выделиться в информационном поле.
          </div>
        </div>
      </div>

      <div className={clsx(styles.logosContainer, 'container')}>
        <LogosSlider />
      </div>

      <div className={styles.cubesWrapper}>
        <div className={clsx(styles.cubesContainer, 'container')}>
          <CubeMouseMove className={styles.cube1} parallaxSpeed={0.02}>
            <Image src={cubeImg} alt="" />
          </CubeMouseMove>
          <CubeMouseMove className={styles.cube2} parallaxSpeed={0.04}>
            <Image src={cubeImg} alt="" />
          </CubeMouseMove>
        </div>
      </div>
    </section>
  );
}
