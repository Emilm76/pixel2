import clsx from 'clsx';
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
            <div className={styles.worker}></div>
            <div className={styles.worker}></div>
            <div className={styles.worker}></div>
            <div className={styles.worker}></div>
            <div className={styles.worker}></div>
            <div className={styles.worker}></div>
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
