import { ButtonPrimaryMedia } from '@/ui/button/button-primary-media';
import clsx from 'clsx';
import styles from './steps-section.module.scss';

export function StepsSection() {
  return (
    <section className="section-pt">
      <div className="container">
        <h2 className="h2 h-pb">
          <span className="purple">1000+</span> УНИКАЛЬНЫХ ВАРИАНТОВ ЛОГО
          ЗА ОДНО МГНОВЕНИЕ
        </h2>
      </div>

      <div className={clsx(styles.stepsContainer, 'container')}>
        <div className={styles.step}>
          <h3 className="subtitle li white">Быстрый старт</h3>
          <p>
            Вы предоставляете небольшое описание в свободной форме о бизнесе
            или продукте, а наш конструктор мгновенно анализирует текст
            и предлагает варианты логотипов в различных стилях.
          </p>
        </div>
        <div className={styles.step}>
          <h3 className="subtitle li white">Мгновенный результат</h3>
          <p>
            Визуализация на различных носителях даёт возможность сразу увидеть,
            как айдентика будет выглядеть в действительности, и подобрать
            наилучший вариант для вашего бизнеса.
          </p>
        </div>
        <div className={styles.step}>
          <h3 className="subtitle li white">Защита от повторов</h3>
          <p>
            Создаваемые решения сопоставляются с обширной графической базой
            и регулярно проходят проверку на уникальность. Материалы,
            загруженные другими клиентами, не отображаются в результатах поиска.
          </p>
        </div>
      </div>

      <div className="container">
        <ButtonPrimaryMedia
          className={styles.button}
          href="/logo-builder/create"
          text="Сгенерировать лого в конструкторе"
          mobileText="Сгенерировать"
        />
      </div>
    </section>
  );
}
