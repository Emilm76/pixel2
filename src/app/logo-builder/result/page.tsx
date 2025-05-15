import { ButtonBack } from '@/components/button-back/button-back';
import { CasesSection } from '@/components/cases/cases-section';
import { AboutLogobookSection } from '@/components/logo-builder-page/about-logbook';
import { RequestSection } from '@/components/logo-builder-page/request-section';
import { StyleSection } from '@/components/logo-builder-page/style-section';
import { ResultSection } from '@/components/result-page/result-section';

export default function Constructor() {
  return (
    <main>
      <ButtonBack href="/logo-builder/style" />
      <ResultSection />
      <RequestSection />
      <StyleSection />
      <AboutLogobookSection />
      <CasesSection headerVariant="3" />
    </main>
  );
}
