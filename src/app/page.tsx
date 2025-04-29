import { CasesSection } from '@/components/home-page/cases/cases-section';
import { ClientsSection } from '@/components/home-page/clients/clients-section';
import { CommandSection } from '@/components/home-page/commands/command-section';
import { MainSection } from '@/components/home-page/main/main-section';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>
      <MainSection />
      <CasesSection />
      <ClientsSection />
      <CommandSection />
    </main>
  );
}
