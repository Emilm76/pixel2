import { ButtonPrimary } from '@/ui/button/button-primary';
import { Label } from '@/ui/label/label';
import clsx from 'clsx';
import styles from './main-section.module.scss';

export function MainSection() {
  return (
    <section className={styles.section}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.textBlock}>
          <h1 className="h1">Digital-агентство полного цикла</h1>
          <div className={clsx(styles.subtitle, 'subtitle')}>
            экспертиза более 14 лет в сфере недвижимости
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.labelList}>
            <Label>лидогенерация</Label>
            <Label>вэб-разработка</Label>
            <Label>брендинг</Label>
          </div>
          <ButtonPrimary text="Оставить заявку" />
        </div>
      </div>
    </section>
  );
}
