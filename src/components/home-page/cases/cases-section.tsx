import hermitageImg from '@/images/cases/hermitage.jpg';
import moddImg from '@/images/cases/modd.jpg';
import clsx from 'clsx';
import { Case } from './case-second';
import styles from './cases-section.module.scss';

export function CasesSection() {
  return (
    <section className="section-pt">
      <div className="container">
        <h2 className="h2 h-pb">
          Подтверждаем результативность цифрами и 
          <span className="purple">успешными кейсам</span>
        </h2>
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
