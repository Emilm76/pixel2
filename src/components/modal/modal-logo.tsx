"use client"
import { ButtonClose } from "@/ui/button/button-close"
import { ButtonPrimary } from "@/ui/button/button-primary"
import clsx from "clsx"
import { toPng } from "html-to-image"
import { useLenis } from "lenis/react"
import { createRef, ReactNode, RefObject, useCallback, useEffect } from "react"
import { usePDF } from "react-to-pdf"
import styles from "./modal-logo.module.scss"

export function ModalLogo({
  isOpen,
  closeModalCallback,
  modalData,
  svg,
  text,
}: {
  isOpen: boolean
  closeModalCallback: () => void
  modalData: [string, string]
  svg: ReactNode | null
  text: string
}) {
  const lenis = useLenis()
  const { toPDF, targetRef } = usePDF({
    filename: "Презентация логотипа.pdf",
    // page: {
    //   format: 'A5',
    // },
  })
  const ref = createRef<HTMLDivElement>()

  const onButtonClick = useCallback(() => {
    if (ref.current === null) return

    ref.current.style.display = "inline-flex"

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = "Логотип.png"
        link.href = dataUrl
        link.click()
        if (ref.current) ref.current.style.display = "none"
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  useEffect(() => {
    if (!lenis) return

    if (isOpen) {
      lenis.stop()
    } else {
      lenis.start()
    }

    return () => {
      lenis.start()
    }
  }, [isOpen, lenis])

  return (
    <>
      <div className={clsx(styles.shadow, isOpen && styles.open)}></div>
      <div
        className={clsx(styles.modal, "modal", isOpen && styles.open)}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeModalCallback()
          }
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ButtonClose
              className={styles.buttonClose}
              onClick={closeModalCallback}
            />
            <div className={clsx(styles.container, "container")}>
              <h3 className={clsx(styles.title, "h3 dark")}>
                Логотип <span className="purple">на носителях</span>
              </h3>
              <div className={styles.buttons}>
                <ButtonPrimary
                  onClick={() => toPDF}
                  text="Скачать презентацию"
                />
                <ButtonPrimary onClick={onButtonClick} text="Скачать логотип" />
              </div>

              <div className={styles.images} ref={targetRef}>
                <div
                  className={clsx(styles.image, styles.image1)}
                  style={{
                    background: modalData[0],
                    fill: modalData[1],
                    color: modalData[1],
                  }}
                >
                  {svg}
                  <p className="h3">{text}</p>
                </div>
                <div
                  className={clsx(styles.image, styles.image2)}
                  style={{
                    background: modalData[1],
                    fill: modalData[0],
                    color: modalData[0],
                  }}
                >
                  {svg}
                  <p className="h3">{text}</p>
                </div>
              </div>

              <div
                className={clsx(styles.png)}
                style={{
                  fill: modalData[1],
                  color: modalData[1],
                  display: "none",
                }}
                ref={ref as RefObject<HTMLDivElement>}
              >
                {svg}
                <p className="subtitle">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
