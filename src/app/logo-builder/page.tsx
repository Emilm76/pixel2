import { CasesSection } from '@/components/cases/cases-section';
import { AboutLogobookSection } from '@/components/constructor-page/logobook/about-logbook';
import { MainSection } from '@/components/constructor-page/main/main-section';
import { RequestSection } from '@/components/constructor-page/request/request-section';
import { StepsSection } from '@/components/constructor-page/steps/steps-section';
import { StyleSection } from '@/components/constructor-page/style/style-section';

export default function Constructor() {
  return (
    <main>
      <MainSection />
      <StepsSection />
      <RequestSection />
      <StyleSection />
      <AboutLogobookSection />
      <CasesSection headerVariant="3" />
    </main>
  );
}
