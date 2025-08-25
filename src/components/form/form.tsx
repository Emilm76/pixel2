"use client"

import { ButtonPrimary } from "@/ui/button/button-primary"
import { Checkbox } from "@/ui/checkbox/checkbox"
import { TelField } from "@/ui/field/tel-field"
import { TextField } from "@/ui/field/text-field"
import clsx from "clsx"
import { FormEvent, useState } from "react"
import styles from "./form.module.scss"

const status = {
  wait: "Заявка отправляется...",
  susses: "Заявка успешно отправлена. Ожидайте ответа",
  error: "Произошла ошибка сети при отправке заявки. Попробуйте позже",
  notComplete: "Пожалуйста, заполните все поля полностью",
}

export function Form({ variant = "sm" }: { variant?: "md" | "sm" }) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string | null
    const tel = formData.get("tel") as string | null

    if (!name || !tel || tel.length < 18) {
      setMessage(status.notComplete)
      return
    }

    setIsLoading(true)
    setMessage(status.wait)

    const txt = [
      "<b>Новая заявка</b>",
      name && `\nИмя: ${name}`,
      tel && `\nТелефон: <b>${tel}</b>`,
    ]

    const message = clsx(...txt)

    try {
      const response = await fetch(
        `https://api.telegram.org/bot8016171501:AAG-FkOhqrEwith7MhAidsXRSgXnCPbd9jI/sendMessage?parse_mode=html`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "-4594991068",
            text: message,
          }),
        },
      )

      setIsLoading(false)

      if (response.ok) {
        setMessage(status.susses)
      } else {
        console.error(response.statusText)
        setMessage(status.error)
      }
    } catch (error) {
      console.error(error)
      setMessage(status.error)
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      {variant === "md" && (
        <TextField
          className={styles.input}
          inputProps={{
            type: "text",
            name: "name",
            placeholder: "Ваше имя",
            autoComplete: "off",
            required: true,
          }}
        />
      )}
      <TelField
        className={styles.input}
        inputProps={{
          type: "tel",
          name: "tel",
          placeholder: "Телефон",
          autoComplete: "off",
          required: true,
        }}
      />

      <ButtonPrimary
        className={styles.button}
        type="submit"
        text="Отправить"
        disabled={isLoading}
      />

      <p
        className={clsx(
          styles.message,
          message === status.wait && styles.wait,
          message === status.susses && styles.susses,
          message === status.error && styles.error,
          "info",
        )}
      >
        {message}
      </p>

      <Checkbox
        className={styles.checkbox}
        inputProps={{ name: "agree", required: true }}
      />
    </form>
  )
}
