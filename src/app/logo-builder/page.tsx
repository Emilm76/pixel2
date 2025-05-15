import { CasesSection } from '@/components/cases/cases-section';
import { AboutLogobookSection } from '@/components/logo-builder-page/about-logbook';
import { MainSection } from '@/components/logo-builder-page/main-section';
import { RequestSection } from '@/components/logo-builder-page/request-section';
import { StepsSection } from '@/components/logo-builder-page/steps-section';
import { StyleSection } from '@/components/logo-builder-page/style-section';

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
