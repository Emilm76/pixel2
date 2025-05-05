import { Label } from '@/ui/label/label';
import Image, { StaticImageData } from 'next/image';
import styles from './case.module.scss';

export function Case({
  image,
  name,
  labels,
}: {
  image: StaticImageData;
  name: string;
  labels: string[];
}) {
  return (
    <div className={styles.blok}>
      <Image
        className={styles.image}
        src={image}
        alt={name}
        width={876}
        height={400}
      />
      <div className={styles.labelsWrapper}>
        {labels.map((label, i) => (
          <Label key={i}>{label}</Label>
        ))}
      </div>
      <h3 className="h3">{name}</h3>
    </div>
  );
}
