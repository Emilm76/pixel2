import { ButtonArrow, ButtonArrowProps } from "@/ui/button/button-arrow"
import clsx from "clsx"
import styles from "./button-back.module.scss"

export function ButtonBack(props: ButtonArrowProps) {
  return (
    <div className={clsx(styles.container, "container p1")}>
      <ButtonArrow
        {...props}
        className={styles.button}
        text="Назад"
        variant="left"
      />
    </div>
  )
}
