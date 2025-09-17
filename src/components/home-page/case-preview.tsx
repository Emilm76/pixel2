import { ButtonPrimary } from "@/ui/button/button-primary"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"
import styles from "./case-preview.module.scss"

export function CasePreview({
  image,
  title,
  text,
  href,
  onClick,
}: {
  image: StaticImageData
  title: string
  text: string
  href?: string
  onClick?: () => void
}) {
  return (
    <CasePreviewWrapper href={href} onClick={onClick}>
      <div>
        <Image className={styles.image} src={image} alt={title} />
        <h3 className="h3">{title}</h3>
        <p>{text}</p>
      </div>
      <ButtonPrimary className={styles.button} text="Смотреть кейс" />
    </CasePreviewWrapper>
  )
}

function CasePreviewWrapper({
  href,
  children,
  onClick,
}: {
  href?: string
  children: ReactNode
  onClick?: () => void
}) {
  if (href) {
    return (
      <a className={styles.blok} href={href} target="_blank">
        {children}
      </a>
    )
  }

  return (
    <div className={styles.blok} onClick={onClick}>
      {children}
    </div>
  )
}
