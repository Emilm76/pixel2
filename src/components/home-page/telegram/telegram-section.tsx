import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import styles from './telegram-section.module.scss';
import { WorkCard } from './work-card';

export function TelegramSection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.container, 'container')}>
        <div className={clsx(styles.header, 'h-pb')}>
          <div className={styles.title}>
            <h2 className="h2">Будьте вкурсе событий</h2>
            <h3 className="h3 purple">
              Подписывайтесь на наш канал в Телеграм
            </h3>
          </div>
          <ButtonPrimary text="Перейти в ТГ" />
        </div>

        <div className={styles.grid}>
          <WorkCard />
        </div>
      </div>
    </section>
  );
}
