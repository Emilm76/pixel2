import clsx from 'clsx';
import styles from './process-section.module.scss';
import { Step } from './step';

export function ProcessSection() {
  return (
    <section id="what-do" className="section-pt">
      <div className={clsx(styles.container, 'container')}>
        <div className={clsx(styles.subtitle, 'subtitle')}>
          Улучшаем показатели продаж до 
          <span className="purple">700%</span> с помощью цифровых инструментов
        </div>
        <div className={styles.stepsWrapper}>
          <Step title="Брендинг с нуля" count="1">
            Пройдем вместе с вами весь путь создания разработки бренда с нуля:
            нейминг, логотип, фирменный стиль.
          </Step>
          <Step title="Веб-разработка" count="2">
            <ul className="list">
              <li>Создаём сайты и продающие посадочные страницы;</li>
              <li>Разрабатываем мобильные и веб-приложения;</li>
              <li>Разрабатываем фиды для агрегаторов объявлений;</li>
              <li>Создаём СМС и email-рассылки.</li>
            </ul>
          </Step>
          <Step title="Оптимизация трафика" count="3">
            Внедряем amoCRM, интегрируем системы аналитики Roistat и Smartis,
            настраиваем SEO-оптимизацию сайтов
          </Step>
          <Step title="Лидогенерация" count="4">
            <ul className="list">
              <li>Запускаем медийную рекламу Programmatic;</li>
              <li>Настраиваем контекстную и таргетированную рекламу.</li>
            </ul>
          </Step>
        </div>
      </div>
    </section>
  );
}
