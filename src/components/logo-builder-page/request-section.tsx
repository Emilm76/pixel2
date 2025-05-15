import { LogosSlider } from '../logos/logos-slider';
import styles from './request-section.module.scss';

export function RequestSection() {
  return (
    <section className="section-pt">
      <div className="container">
        <h2 className="h2 h-pb">
          Для сильного бренда — закажите{' '}
          <span className="purple">лого в студии!</span>
        </h2>
        <div className={styles.grid}>
          <div>
            <div className="subtitle">Персонализированные решения</div>
            <p>
              Учитываем вашу отрасль, целевую аудиторию и концепцию бизнеса,
              что позволяет создать логотип, который действительно отражает вашу
              сущность.
            </p>
          </div>
          <LogosSlider />
        </div>
      </div>
    </section>
  );
}
