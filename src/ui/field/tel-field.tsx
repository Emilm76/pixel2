"use client"
import clsx from "clsx"
import { useRef, useState } from "react"
import { IMaskInput } from "react-imask"
import styles from "./text-field.module.scss"

interface IMaskProps {
  type?: string
  name?: string
  placeholder?: string
  autoComplete?: string
  className?: string
  required?: boolean
}

export function TelField({
  className,
  error,
  inputProps = {},
}: {
  className?: string
  error?: string
  inputProps?: IMaskProps
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [filled, setFilled] = useState(false)

  const handleChange = (value: string) => {
    setFilled(value.length > 0)
  }

  return (
    <div className={className}>
      <div className="inputWrapper">
        <IMaskInput
          {...inputProps}
          className={clsx(
            styles.input,
            "input",
            filled && "_fill",
            inputProps.className,
          )}
          mask="+{7} (000) 000-00-00"
          inputRef={inputRef}
          onAccept={handleChange}
        />
        <span></span>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
