"use client"
import { Label } from "@/ui/label"
import { ReactNode, useRef, useState } from "react"
import styles from "./step.module.scss"

export function Step({
  title,
  count,
  children,
}: {
  title: string
  count: string
  children: ReactNode
}) {
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  function handleMouseEnter() {
    setHeight(ref.current?.clientHeight ?? 0)
  }

  function handleMouseLeave() {
    setHeight(0)
  }

  return (
    <div
      className={styles.step}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.header}>
        <h2 className="h2">{title}</h2>
        <Label className={styles.label} variant="number">
          {count}
        </Label>
      </div>
      <div className={styles.contentWrapper} style={{ height: height }}>
        <div className={styles.content} ref={ref}>
          {children}
        </div>
      </div>
    </div>
  )
}
