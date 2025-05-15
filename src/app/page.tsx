import { CasesSection } from '@/components/cases/cases-section';
import { CasesPreviewSection } from '@/components/home-page/cases-preview-section';
import { ClientsSection } from '@/components/home-page/clients-section';
import { CommandSection } from '@/components/home-page/command-section';
import { FormSection } from '@/components/home-page/form-section';
import { MainSection } from '@/components/home-page/main-section';
import { ProcessSection } from '@/components/home-page/process-section';
import { QuestionsSection } from '@/components/home-page/questions-section';
import { TelegramSection } from '@/components/home-page/telegram-section';

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
