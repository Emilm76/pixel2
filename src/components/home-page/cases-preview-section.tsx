import hermitageImg from '@/images/cases-preview/hermitage.jpg';
import moddImg from '@/images/cases-preview/modd.jpg';
import clsx from 'clsx';
import { CasePreview } from './case-preview';
import styles from './cases-preview-section.module.scss';

export function CasesPreviewSection() {
  return (
    <section className="section-pt">
      <div className="container">
        <h2 className="h2 h-pb">
          Подтверждаем результативность цифрами и 
          <span className="purple">успешными кейсам</span>
        </h2>
      </div>

      <div className={clsx(styles.grid, 'container')}>
        <CasePreview
          image={hermitageImg}
          title="WEB"
          text="Сайт жилого комплекса «Эрмитаж» – входит в ТОП-20 сайтов премии WOW AWARDS-2024"
        />
        <CasePreview
          image={moddImg}
          title="CONTEXT"
          text="Успешный кейс по работе с группой компаний «ЮгСтройИнвест», сертифицированный и подтверждённый Яндексом"
        />
      </div>
    </section>
  );
}
