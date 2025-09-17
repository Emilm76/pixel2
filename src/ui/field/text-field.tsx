"use client"
import clsx from "clsx"
import { ChangeEvent, InputHTMLAttributes, useRef, useState } from "react"
import styles from "./text-field.module.scss"

export function TextField({
  className,
  error,
  inputProps = {},
}: {
  className?: string
  error?: string
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [filled, setFilled] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilled(e.target.value.length > 0)
  }

  return (
    <div className={className}>
      <div className="inputWrapper">
        <input
          {...inputProps}
          className={clsx(
            styles.input,
            "input",
            filled && "_fill",
            inputProps.className,
          )}
          onChange={handleChange}
          ref={inputRef}
        />
        <span></span>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
