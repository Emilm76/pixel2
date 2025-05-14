import { ButtonBack } from '@/components/back-button/button-back';
import { CasesSection } from '@/components/cases/cases-section';
import { AboutLogobookSection } from '@/components/constructor-page/logobook/about-logbook';
import { RequestSection } from '@/components/constructor-page/request/request-section';
import { StyleSection } from '@/components/constructor-page/style/style-section';
import { ResultSection } from '@/components/result-page/result-section/result-section';

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
