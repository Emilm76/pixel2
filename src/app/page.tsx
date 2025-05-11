import { CasesPreviewSection } from '@/components/home-page/cases-preview/cases-preview-section';
import { CasesSection } from '@/components/home-page/cases/cases-section';
import { ClientsSection } from '@/components/home-page/clients/clients-section';
import { CommandSection } from '@/components/home-page/commands/command-section';
import { FormSection } from '@/components/home-page/form/form-section';
import { MainSection } from '@/components/home-page/main/main-section';
import { ProcessSection } from '@/components/home-page/process/process-section';
import { QuestionsSection } from '@/components/home-page/questions/questions-section';
import { TelegramSection } from '@/components/home-page/telegram/telegram-section';

export default function Home() {
  return (
    <main>
      <MainSection />
      <CasesPreviewSection />
      <ClientsSection />
      <CommandSection />
      <ProcessSection />
      <CasesSection />
      <FormSection />
      <TelegramSection />
      <QuestionsSection />
    </main>
  );
}
