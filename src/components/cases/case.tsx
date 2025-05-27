import { Label } from '@/ui/label';
import Image, { StaticImageData } from 'next/image';
import styles from './case.module.scss';

export function Case({
  image,
  name,
  labels,
  onClick,
}: {
  image: StaticImageData;
  name: string;
  labels: string[];
  onClick: () => void;
}) {
  return (
    <div className={styles.blok} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={image}
          alt={name}
          width={876}
          height={400}
        />
      </div>
      <div className={styles.labelsWrapper}>
        {labels.map((label, i) => (
          <Label key={i}>{label}</Label>
        ))}
      </div>
      <h3 className="h3">{name}</h3>
    </div>
  );
}
