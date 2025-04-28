import { MainSection } from '@/components/home-page/main/main-section';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>
      <MainSection />
    </main>
  );
}
