import cubeImg from '@/images/icons/cube.svg';
import { VideoLazyLoad } from '@/ui/video/video-lazy-load';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './clients-section.module.scss';

export function ClientsSection() {
  return (
    <section id="about" className="section-pt">
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.videoBlock}>
          <div className={styles.videoWrapper}>
            <VideoLazyLoad
              className={styles.video}
              src={{
                webm: '/video/purple-abstract-45-1280.webm',
                mp4: '/video/purple-abstract-30-1280.mp4',
                mobileWebm: '/video/purple-abstract-45-768-400.webm',
                mobileMp4: '/video/purple-abstract-30-768-400.mp4',
              }}
              videoProps={{
                poster: '/images/purple-abstract-preview.jpg',
                width: '960',
                height: '760',
              }}
            />
          </div>
          <p className={clsx(styles.subtitle, 'subtitle')}>
            Уже 14 лет мы успешно помогаем бизнесу решать задачи с помощью
            маркетинговых инструментов — будь то небольшие кофейни или крупные
            корпорации
          </p>
        </div>

        <div className={styles.featuresWrapper}>
          <div className={styles.feature}>
            <h3 className="h2">
              80<span className="purple">%</span>
            </h3>
            <p className="p1">
              наших клиентов — постоянные партнёры, что подтверждает доверие
              к нашей команде и качество наших услуг.
            </p>
            <Image className={styles.cube1} src={cubeImg} alt="" />
          </div>
          <div className={styles.feature}>
            <p className="p1">
              Мы знаем, как работать на уровне топовых игроков: среди наших
              постоянных клиентов —
            </p>
            <h3 className="h2">
              <span className="purple">ТОП</span>-10
            </h3>
            <p className="p1">застройщиков России, ГК ЮгСтройИнвест.</p>
          </div>
          <div className={styles.feature}>
            <p className="p1">В 2024 году мы привлекли более</p>
            <h3 className="h2">50 000</h3>
            <p className="p1">
              целевых лидов и помогли закрыть сделки на сумму 10 миллиардов
              рублей.
            </p>
            <Image className={styles.cube2} src={cubeImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
