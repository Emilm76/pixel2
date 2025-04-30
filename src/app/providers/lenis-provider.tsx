'use client';
import gsap from 'gsap';
import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect, useRef } from 'react';

export function LenisScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ duration: 1.5, autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
