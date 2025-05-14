import { ViaTourismIcon } from '@/images/icons/via-tourism';
import styles from './result-section.module.scss';

export function ResultSection() {
  return (
    <section className="section-pt">
      <div className="container">
        <h2 className="h2 h-pb">
          Выберите <span className="purple">логотип</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.logo}>
            <ViaTourismIcon />
          </div>
          <div className={styles.logo}>
            <ViaTourismIcon />
          </div>
          <div className={styles.logo}>
            <ViaTourismIcon />
          </div>
          <div className={styles.logo}>
            <ViaTourismIcon />
          </div>
          <div className={styles.logo}>
            <ViaTourismIcon />
          </div>
          <div className={styles.logo}>
            <ViaTourismIcon />
          </div>
          <div className={styles.logo}>
            <ViaTourismIcon />
          </div>
          <div className={styles.logo}>
            <ViaTourismIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
