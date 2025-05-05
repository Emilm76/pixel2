import { Label } from '@/ui/label/label';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={clsx(styles.footer, 'section-pt')}>
      <div className="container">
        <h2 className="h2 h-pb">контакты</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.blok}>
          <Label>Позвонить</Label>
          <div className={styles.infoWrapper}>
            <div className="h3">+7 (928) 982-10-42</div>
            <div className="h3">+7 (928) 820-40-33</div>
          </div>
        </div>
        <div className={styles.blok}>
          <Label>Написать</Label>
          <div className={styles.infoWrapper}>
            <div className="button-text-lg">
              <Link href="" className="h3">
                Telegram
              </Link>
            </div>
            <div className="button-text-lg">
              <Link href="" className="h3">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.blok}>
          <Label>Встретиться</Label>
          <div className={styles.infoWrapper}>
            <div className="h3">
              г. Ставрополь, ул. Комсомольская, 58А, офис 3008
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
