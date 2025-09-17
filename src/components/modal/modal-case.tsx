"use client"
import { LoaderIcon } from "@/images/icons/loader"
import { Case } from "@/modules/cases-list/domain/case"
import { ButtonPrimary } from "@/ui/button/button-primary"
import clsx from "clsx"
import { useLenis } from "lenis/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ButtonClose } from "../../ui/button/button-close"
import styles from "./modal-case.module.scss"

export function ModalCase({
  isOpen,
  closeModalCallback,
  modalData,
}: {
  isOpen: boolean
  closeModalCallback: () => void
  modalData: Case | null
}) {
  const lenis = useLenis()
  const [isImageLoading, setIsImageLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsImageLoading(true)
    }
  }, [isOpen])

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

  if (!modalData) return

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
                {modalData.title}
              </h3>
              <div className={styles.text}>
                <p>{modalData.description}</p>
                {modalData.url && (
                  <ButtonPrimary
                    className={styles.buttonSite}
                    href={modalData.url}
                    target="_blank"
                    text="Ссылка на сайт"
                  />
                )}
              </div>
            </div>

            <div
              className={clsx(
                styles.loaderWrapper,
                !isImageLoading && styles.load,
              )}
            >
              <LoaderIcon className={styles.loader} />
            </div>
            {modalData.posterPath && (
              <Image
                className={clsx(styles.image, isImageLoading && styles.loading)}
                src={modalData.posterPath}
                width={1410}
                height={2000}
                onLoad={() => setIsImageLoading(false)}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
