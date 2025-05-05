import { FormSection } from '@/components/form/form-section';
import { CasesPreviewSection } from '@/components/home-page/cases-preview/cases-preview-section';
import { CasesSection } from '@/components/home-page/cases/cases-section';
import { ClientsSection } from '@/components/home-page/clients/clients-section';
import { CommandSection } from '@/components/home-page/commands/command-section';
import { MainSection } from '@/components/home-page/main/main-section';
import { ProcessSection } from '@/components/home-page/process/process-section';
import { TelegramSection } from '@/components/home-page/telegram/telegram-section';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>
      <MainSection />
      <CasesPreviewSection />
      <ClientsSection />
      <CommandSection />
      <ProcessSection />
      <CasesSection />
      <FormSection />
      <TelegramSection />
    </main>
  );
}
