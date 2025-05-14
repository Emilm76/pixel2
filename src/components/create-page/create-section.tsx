import simplyCardImg from '@/images/logo-builder/simply-card.jpg';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './create-section.module.scss';
import { Form } from './form';

export function CreateSection() {
  return (
    <section className="section-pt-2">
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.contentWrapper}>
          <h2 className="h2 h-pb">
            Генератор <span className="purple">логотипов</span>
          </h2>

          <Form />
        </div>

        <div>
          <Image
            className={styles.image}
            src={simplyCardImg}
            width={890}
            height={678}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
