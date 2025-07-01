import { ButtonPrimary } from '@/ui/button/button-primary';
import Image, { StaticImageData } from 'next/image';
import styles from './case-preview.module.scss';

export function CasePreview({
  image,
  title,
  text,
  onClick,
}: {
  image: StaticImageData;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <div className={styles.blok} onClick={onClick}>
      <div>
        <Image className={styles.image} src={image} alt={title} />
        <h3 className="h3">{title}</h3>
        <p>{text}</p>
      </div>
      <ButtonPrimary className={styles.button} text="Смотреть кейс" />
    </div>
  );
}
