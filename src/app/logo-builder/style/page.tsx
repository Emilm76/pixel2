import { ButtonBack } from '@/components/back-button/button-back';
import { SelectColorSection } from '@/components/style-page/select-color-section';
import { SelectLogoSection } from '@/components/style-page/select-logo-section';

export default function Constructor() {
  return (
    <main>
      <ButtonBack href="/logo-builder/create" />
      <SelectColorSection />
      <SelectLogoSection />
    </main>
  );
}
