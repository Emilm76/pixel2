import aizaImg from '@/images/command/aiza.jpg';
import emilImg from '@/images/command/emil.jpg';
import milaImg from '@/images/command/mila.jpg';
// import milaImg from '@/images/command/mila-imp.jpg'
import aiza2Img from '@/images/command/aiza-2.jpg';
import emil2Img from '@/images/command/emil-2.jpg';
import mila2Img from '@/images/command/mila-2.jpg';
import nastyImg from '@/images/command/nasty.jpg';
import polinaImg from '@/images/command/polina.jpg';
// import mila2Img from '@/images/command/mila-im-2p.jpg'
import nasty2Img from '@/images/command/nasty-2.jpg';
import polina2Img from '@/images/command/polina-2.jpg';
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
              <Image
                className={styles.image1}
                src={nastyImg}
                width={200}
                alt=""
              />
              <Image
                className={styles.image2}
                src={nasty2Img}
                width={200}
                alt=""
              />
            </div>
            <div className={styles.worker}>
              <Image
                className={styles.image1}
                src={emilImg}
                width={200}
                alt=""
              />
              <Image
                className={styles.image2}
                src={emil2Img}
                width={200}
                alt=""
              />
            </div>
            <div className={styles.worker}>
              <Image
                className={styles.image1}
                src={polinaImg}
                width={200}
                alt=""
              />
              <Image
                className={styles.image2}
                src={polina2Img}
                width={200}
                alt=""
              />
            </div>
            <div className={styles.worker}>
              <Image
                className={styles.image1}
                src={aizaImg}
                width={200}
                alt=""
              />
              <Image
                className={styles.image2}
                src={aiza2Img}
                width={200}
                alt=""
              />
            </div>
            <div className={styles.worker}>
              <Image
                className={styles.image1}
                src={milaImg}
                width={200}
                alt=""
              />
              <Image
                className={styles.image2}
                src={mila2Img}
                width={200}
                alt=""
              />
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
