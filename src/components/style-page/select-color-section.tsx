"use client"
import logo1Img from "@/images/logos/1.jpg"
import logo10Img from "@/images/logos/10.jpg"
import logo11Img from "@/images/logos/11.jpg"
import logo12Img from "@/images/logos/12.jpg"
import logo2Img from "@/images/logos/2.jpg"
import logo3Img from "@/images/logos/3.jpg"
import logo4Img from "@/images/logos/4.jpg"
import logo5Img from "@/images/logos/5.jpg"
import logo6Img from "@/images/logos/6.jpg"
import logo8Img from "@/images/logos/8.jpg"
import logo9Img from "@/images/logos/9.jpg"
import { setActiveStepForm } from "@/lib/features/active-step-form-slice"
import { setCompanyForm } from "@/lib/features/company-form-slice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { ButtonPrimaryMedia } from "@/ui/button/button-primary-media"
import clsx from "clsx"
import Image from "next/image"
import { FormEvent, useEffect, useState } from "react"
import styles from "./select-color-section.module.scss"

const colors = [
  "#31308E",
  "#2B3692",
  "#28409C",
  "#1F52A7",
  "#186DBE",
  "#0F84D1",
  "#069BDF",
  "#02A9DA",
  "#0AA94D",
  "#32B543",
  "#85CF34",
  "#C5E23A",
  "#EEED05",
  "#FFF001",
  "#FEDD04",
  "#FDCA21",
  "#F79010",
  "#F57616",
  "#F3661F",
  "#F2581A",
  "#EA202C",
  "#EE223B",
  "#ED1B4F",
  "#EC145D",
  "#F02F8C",
  "#E55D9F",
  "#DF8FB6",
  "#D7BFCB",
  "#D7D8D2",
  "#8E8F91",
  "#050A0D",
  "#FFFFFF",
]

const logos = [
  logo1Img,
  logo2Img,
  logo3Img,
  logo4Img,
  logo5Img,
  logo6Img,
  logo8Img,
  logo9Img,
  logo10Img,
  logo11Img,
  logo12Img,
]

export function SelectColorSection() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedLogos, setSelectedLogos] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const { name, description } = useAppSelector((state) => state.companyForm)
  const handleClick = (logo: string) => {
    setSelectedLogos((prev) => {
      const isIncludes = prev.includes(logo)
      return isIncludes ? prev.filter((l) => l !== logo) : [...prev, logo]
    })
  }

  useEffect(() => {
    console.log(selectedLogos)
  }, [selectedLogos])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const color = formData.get("color") as string

    console.log(name, JSON.stringify({ message: name }))

    // fetch
    const response = await fetch("https://ai-logos.pixel2.studio/api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: name }),
    })
    const data = await response.json()

    if (data.error) {
      console.error(data.response)
      setIsError(true)
      return
    } else {
      dispatch(
        setCompanyForm({ name, description, color, logoSrc: data.response }),
      )
      dispatch(setActiveStepForm({ step: "3" }))
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="section-pt-2">
        <div className="container h-pb">
          <div className={styles.header}>
            <h2 className="h2">
              Выберите <span className="purple">цвет</span>
            </h2>
            {/*<ButtonPrimary className={styles.button} text="Выбрать из палитры" />*/}
          </div>
        </div>

        <div className={clsx(styles.colorsContainer, "container")}>
          {colors.map((color, index) => {
            return (
              <label
                className={clsx(
                  styles.colorItem,
                  selectedColor === color && styles.selected,
                )}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                key={index}
              >
                <input type="radio" name="color" value={color} />
              </label>
            )
          })}
        </div>
      </section>

      <section className="section-pt-2">
        <div className="container">
          <h2 className="h2 h-pb">
            Выберите <span className="purple">эталонные</span> логотипы
          </h2>

          <div className={styles.grid}>
            {logos.map((image, index) => {
              return (
                <label className={styles.logoWrapper} key={index}>
                  <div className={styles.logoContent}>
                    <Image src={image} width={283} height={274} alt="" />
                    <input
                      className={clsx(styles.checkbox, "checkbox")}
                      onChange={() => handleClick(image.src)}
                      type="checkbox"
                      name="logo"
                    />
                  </div>
                </label>
              )
            })}
          </div>

          <ButtonPrimaryMedia
            className={styles.buttonSubmit}
            text="Сгенерировать логотип"
            mobileText="Сгенерировать"
            type="submit"
            disabled={isLoading}
          />

          {isError && (
            <p className={styles.error}>Произошла ошибка, попробуйте позже</p>
          )}
        </div>
      </section>
    </form>
  )
}
