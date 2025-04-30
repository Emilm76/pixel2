import { ButtonPrimary } from '@/ui/button-primary/button-primary';
import Image, { StaticImageData } from 'next/image';
import styles from './case.module.scss';

export function Case({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.blok}>
      <div>
        <Image
          className={styles.image}
          src={image}
          alt="Логотип Pixel"
          width={876}
          height={400}
        />
        <h3 className="h3">{title}</h3>
        <p>{text}</p>
      </div>
      <ButtonPrimary className={styles.button} text="Смотреть кейс" />
    </div>
  );
}
