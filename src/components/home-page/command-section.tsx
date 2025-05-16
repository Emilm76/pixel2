import aizaImg from '@/images/command/aiza.jpg';
import emilImg from '@/images/command/emil.jpg';
import milaImg from '@/images/command/mila.jpg';
import nastyImg from '@/images/command/nasty.jpg';
import polinaImg from '@/images/command/polina.jpg';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './command-section.module.scss';

export function CommandSection() {
  return (
    <section className="section-pt">
      <div className="container">
        <h2 className="h2 h-pb">
          Персональные <span className="purple">команды</span>
        </h2>
        <div className={styles.grid}>
          <div className={styles.workersWrapper}>
            <div className={styles.worker}>
              <Image src={nastyImg} width={200} alt="" />
            </div>
            <div className={styles.worker}>
              <Image src={emilImg} width={200} alt="" />
            </div>
            <div className={styles.worker}>
              <Image src={polinaImg} width={200} alt="" />
            </div>
            <div className={styles.worker}>
              <Image src={aizaImg} width={200} alt="" />
            </div>
            <div className={styles.worker}>
              <Image src={milaImg} width={200} alt="" />
            </div>
            <div className={clsx(styles.worker, styles.workerMore)}>
              <span className="h3">50+</span>
            </div>
          </div>
          <p>
            это означает, что для вашего проекта будет сформирована команда
            специалистов, полностью сосредоточенная на только ваших задачах.
          </p>
        </div>
      </div>
    </section>
  );
}
