import { ButtonBack } from '@/components/back-button/button-back';
import { CreateSection } from '@/components/create-page/create-section';

export default function Constructor() {
  return (
    <main>
      <ButtonBack href="/logo-builder" />
      <CreateSection />
    </main>
  );
}
