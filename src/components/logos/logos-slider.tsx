"use client"
import clsx from "clsx"
import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel from "embla-carousel-react"
import styles from "./logos-slider.module.scss"
import { logos } from "./logo"

export function LogosSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll(),
  ])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {logos.map((Logo, index) => {
          return (
            <div className={clsx(styles.slide, "embla__slide")} key={index}>
              <Logo />
            </div>
          )
        })}
      </div>
    </div>
  )
}
