import clsx from "clsx"
import styles from "./label.module.scss"

export function Label({
  children,
  variant = "text",
  className,
}: {
  children: string | number
  variant?: "text" | "number"
  className?: string
}) {
  const variantClass = {
    text: styles.text,
    number: styles.number,
  }[variant]

  return (
    <div className={clsx(styles.label, variantClass, className, "p1")}>
      <span>{children}</span>
    </div>
  )
}
