import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import { Reels } from './reels';
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
            className={styles.button}
            href="https://t.me/pixel2studio"
            target="_blank"
            text="Перейти в ТГ"
          />
        </div>

        <Reels />
      </div>
    </section>
  );
}
