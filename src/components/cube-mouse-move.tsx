'use client';
import gsap from 'gsap';
import { ReactNode, useEffect } from 'react';

export function CubeMouseMove({
  parallaxSpeed,
  className,
  children,
}: {
  parallaxSpeed: number;
  className: string;
  children: ReactNode;
}) {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const parallaxX = (mouseX - window.innerWidth / 2) * parallaxSpeed;
      const parallaxY = (mouseY - window.innerHeight / 2) * parallaxSpeed;

      gsap.to(`.${className}`, {
        x: parallaxX,
        y: parallaxY,
        duration: 0.75,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [className, parallaxSpeed]);

  return <div className={className}>{children}</div>;
}
