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
    <div className={styles.blok}>
      <div>
        <Image
          className={styles.image}
          src={image}
          alt={title}
          width={876}
          height={400}
        />
        <h3 className="h3">{title}</h3>
        <p>{text}</p>
      </div>
      <ButtonPrimary
        onClick={onClick}
        className={styles.button}
        text="Смотреть кейс"
      />
    </div>
  );
}
