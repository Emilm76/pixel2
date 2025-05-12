import cubeImg from '@/images/icons/cube-sm.svg';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './about-logobook-section.module.scss';

export function AboutLogobookSection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.header, 'container h-pb')}>
        <h2 className="h2">
          Что входит <span className="purple">в логобук?</span>
        </h2>
        <p>
          Вместе с логотипом доступен для скачивания архив с элементами
          айдентики. В архиве содержится исходник логотипа, макеты визитки
          и фирменного бланка, презентация лого на разных носителях, палитра
          фирменных цветов и шрифтов, паттерн и графика для соцсетей.
        </p>
      </div>

      <div className={clsx(styles.grid, 'container')}>
        <div className={styles.block}>
          <Image src={cubeImg} alt="" />
          <h3 className="h3">Лого во всех форматах</h3>
        </div>
        <div className={styles.block}>
          <Image src={cubeImg} alt="" />
          <h3 className="h3">Презентация на носителях</h3>
        </div>
        <div className={styles.block}>
          <Image src={cubeImg} alt="" />
          <h3 className="h3">Палитра цветов</h3>
        </div>
        <div className={styles.block}>
          <Image src={cubeImg} alt="" />
          <h3 className="h3">Шрифты</h3>
        </div>
        <div className={styles.block}>
          <Image src={cubeImg} alt="" />
          <h3 className="h3">Паттерны</h3>
        </div>
        <div className={styles.block}>
          <Image src={cubeImg} alt="" />
          <h3 className="h3">Шаблоны для соцсетей</h3>
        </div>
      </div>
    </section>
  );
}
