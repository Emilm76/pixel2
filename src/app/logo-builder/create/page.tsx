'use client';
import { ButtonBack } from '@/components/button-back/button-back';
import { CasesSection } from '@/components/cases/cases-section';
import { CreateSection } from '@/components/create-page/create-section';
import { AboutLogobookSection } from '@/components/logo-builder-page/about-logbook';
import { RequestSection } from '@/components/logo-builder-page/request-section';
import { StyleSection } from '@/components/logo-builder-page/style-section';
import { ResultSection } from '@/components/result-page/result-section';
import { SelectColorSection } from '@/components/style-page/select-color-section';
import { setActiveStepForm } from '@/lib/features/active-step-form-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export default function Constructor() {
  const lenis = useLenis();
  const activePage = useAppSelector((state: RootState) => state.activeStepForm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
  }, [activePage, lenis]);

  const page = {
    '1': (
      <>
        <ButtonBack href="/logo-builder" />
        <CreateSection />
      </>
    ),
    '2': (
      <>
        <ButtonBack
          onClick={() => dispatch(setActiveStepForm({ step: '1' }))}
        />
        <SelectColorSection />
      </>
    ),
    '3': (
      <>
        <ButtonBack
          onClick={() => dispatch(setActiveStepForm({ step: '2' }))}
        />
        <ResultSection />
        <RequestSection />
        <StyleSection />
        <AboutLogobookSection />
        <CasesSection headerVariant="3" />
      </>
    ),
  }[activePage.step];

  return <main>{page}</main>;
}
