'use client';
import gsap from 'gsap';
import 'lenis/dist/lenis.css';
import { LenisRef, ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';

export function LenisScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  // storing the pathnames when the value changes.
  useEffect(() => {
    storePathValues();
  }, [pathname]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    const prevPath = storage.getItem('currentPath');

    storage.setItem('prevPath', prevPath ?? '/');
    storage.setItem('currentPath', globalThis.location.pathname);
  }

  // Скролл к началу страницы (костыль для Lenis)
  useEffect(() => {
    const prevPath = sessionStorage.getItem('prevPath');

    if (
      prevPath !== pathname &&
      lenis &&
      (lenis.direction !== 0 || !/[#?]/.test(pathname))
    ) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        autoRaf: false,
        prevent: (node) => node.classList.contains('modal'),
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
