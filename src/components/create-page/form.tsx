"use client"
import { setActiveStepForm } from "@/lib/features/active-step-form-slice"
import { setCompanyForm } from "@/lib/features/company-form-slice"
import { useAppDispatch } from "@/lib/hooks"
import { ButtonPrimary } from "@/ui/button/button-primary"
import { TextField } from "@/ui/field/text-field"
import { FormEvent } from "react"
import styles from "./form.module.scss"

export function Form() {
  const dispatch = useAppDispatch()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const description = formData.get("description") as string

    if (name !== "" && description !== "") {
      dispatch(
        setCompanyForm({ name, description, color: "#186DBE", logoSrc: "" }),
      )

      dispatch(setActiveStepForm({ step: "2" }))
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <TextField
          className={styles.input}
          inputProps={{
            type: "text",
            name: "description",
            placeholder: "Название компании",
            autoComplete: "off",
            required: true,
          }}
        />
        <p className={styles.label}>(будет использоваться в логотипе)</p>
      </div>

      <div className={styles.inputWrapper}>
        <TextField
          inputProps={{
            type: "text",
            name: "name",
            placeholder: "Описание",
            autoComplete: "off",
            required: true,
          }}
        />
        <p className={styles.label}>(несколько слов о Вас)</p>
      </div>

      <ButtonPrimary
        className={styles.button}
        text="Сгенерировать логотип"
        type="submit"
      />
    </form>
  )
}
