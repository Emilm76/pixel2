"use client"
import { useLenis } from "lenis/react"

export function AnchorLink() {
  const lenis = useLenis()

  // lenis.scrollTo($el, {
  //   offset: 0,
  //   immediate: false,
  //   duration: 3,
  //   easing: (x: number) =>
  //     x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  // });

  return (
    <span
      onClick={() => {
        lenis?.scrollTo("#pages-main")
      }}
    ></span>
  )
}
