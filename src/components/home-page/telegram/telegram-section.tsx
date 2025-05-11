import hermitageImg from '@/images/reels/hermitage.jpg';
import pechorinImg from '@/images/reels/pechorin.jpg';
import poletImg from '@/images/reels/polet.jpg';
import remontStyleImg from '@/images/reels/remont-style.jpg';
import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import { Reel } from './reel';
import styles from './telegram-section.module.scss';

export function TelegramSection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.container, 'container')}>
        <div className={clsx(styles.header, 'h-pb')}>
          <div className={styles.title}>
            <h2 className="h2">Будьте в курсе событий</h2>
            <h3 className="h3 purple">
              Подписывайтесь на наш канал в Телеграм
            </h3>
          </div>
          <ButtonPrimary
            href="https://t.me/pixel2studio"
            target="_blank"
            text="Перейти в ТГ"
          />
        </div>

        <div className={styles.grid}>
          <Reel
            previewImage={hermitageImg}
            videoSrc={{
              webm: '/video/reels/hermitage-45-550.webm',
              mp4: '/video/reels/hermitage-30-550.mp4',
            }}
          />
          <Reel
            previewImage={pechorinImg}
            videoSrc={{
              webm: '/video/reels/pechorin-45-550.webm',
              mp4: '/video/reels/pechorin-30-550.mp4',
            }}
          />
          <Reel
            previewImage={poletImg}
            videoSrc={{
              webm: '/video/reels/polet-45-550.webm',
              mp4: '/video/reels/polet-30-550.mp4',
            }}
          />
          <Reel
            previewImage={remontStyleImg}
            videoSrc={{
              webm: '/video/reels/remont-style-45-550.webm',
              mp4: '/video/reels/remont-style-30-550.mp4',
            }}
          />
        </div>
      </div>
    </section>
  );
}
