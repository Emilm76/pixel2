import clsx from 'clsx';
import styles from './clients-section.module.scss';

export function ClientsSection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.videoWrapper}>
          <div className={styles.video}></div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
