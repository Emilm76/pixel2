import clsx from "clsx"
import { InputHTMLAttributes, useId } from "react"
import styles from "./checkbox.module.scss"

export function Checkbox({
  className,
  inputProps = {},
}: {
  className?: string
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}) {
  const id = useId()

  return (
    <div className={clsx(styles.wrapper, className)}>
      <input
        {...inputProps}
        className={clsx("checkbox", inputProps.className)}
        type="checkbox"
        id={id}
      />
      <label htmlFor={id} className="info">
        Согласие на обработку персональных данных
      </label>
    </div>
  )
}
