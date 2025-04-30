import hermitageImg from '@/images/cases/hermitage.jpg';
import moddImg from '@/images/cases/modd.jpg';
import { ButtonPrimary } from '@/ui/button-primary/button-primary';
import clsx from 'clsx';
import { Case } from './case';
import styles from './cases-section.module.scss';

export function CasesSection() {
  return (
    <section className="section-pt">
      <div className="container">
        <h2 className="h3 h-pb">
          Каждый проект в нашей компании — это комплекс услуг от А до Я, который
          включает{' '}
          <span className="purple">
            аналитику, проектирование, дизайн, разработку
          </span>{' '}
          и вывод продукта на рынок.
        </h2>

        <div className={styles.header}>
          <div className={styles.filter}></div>
          <ButtonPrimary text="Все кейсы" />
        </div>
      </div>

      <div className={clsx(styles.grid, 'container')}>
        <Case
          image={hermitageImg}
          title="WEB"
          text="Сайт жилого комплекса «Эрмитаж» – входит в ТОП-20 сайтов премии WOW AWARDS-2024"
        />
        <Case
          image={moddImg}
          title="CONTEXT"
          text="Успешный кейс по работе с группой компаний «ЮгСтройИнвест», сертифицированный и подтверждённый Яндексом"
        />
      </div>
    </section>
  );
}
