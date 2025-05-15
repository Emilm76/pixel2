import clsx from 'clsx';
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
    </section>
  );
}
