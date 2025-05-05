import clsx from 'clsx';
import { Form } from './form';
import styles from './form-section.module.scss';

export function FormSection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.videoContainer, 'container')}>
        <div className={styles.videoWrapper}>
          <div className={styles.video}></div>
        </div>
      </div>

      <div className={clsx(styles.formContainer, 'container')}>
        <h3 className="h3">
          Получите коммерческое предложение с расчётом стоимости и сроков всего
          за 1 день
        </h3>
        <div className={styles.formWrapper}>
          <Form />
        </div>
      </div>
    </section>
  );
}
