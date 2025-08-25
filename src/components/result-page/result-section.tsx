"use client"
import { useAppSelector } from "@/lib/hooks"
import { ReactNode, useEffect, useState } from "react"
import { ModalLogo } from "../modal/modal-logo"
import styles from "./result-section.module.scss"

const logos: [string, string][] = [
  ["#ffe815", "#ff513c"],
  ["#023856", "#a4e4f3"],
  ["#ff513c", "#ffffff"],
  ["#00dd95", "#023856"],
  ["#ffffff", "#ff513c"],
  ["#b5ffe3", "#00dd95"],
  ["#ff513c", "#ffe815"],
  ["#ffe815", "#023856"],
]

export function ResultSection() {
  const companyForm = useAppSelector((state) => state.companyForm)
  const [svgIcon, setSvgIcon] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState<[string, string]>(["", ""])

  useEffect(() => {
    console.log("companyForm data:", companyForm)
    loadImg(companyForm.logoSrc)
  }, [companyForm])

  async function loadImg(url: string) {
    const response = await fetch(url, { method: "GET" })
    const svgText = await response.text()
    setSvgIcon(svgText)
    console.log(svgText)
  }

  function openModal(modalData: [string, string]) {
    setModalData(modalData)
    setIsModalOpen(true)
  }

  function closeModal() {
    setModalData(["", ""])
    setIsModalOpen(false)
  }

  const svg = (
    <div
      dangerouslySetInnerHTML={svgIcon ? { __html: svgIcon } : undefined}
    ></div>
  )

  return (
    <section className="section-pt-2">
      <div className="container">
        <h2 className="h2 h-pb">
          Выберите <span className="purple">логотип</span>
        </h2>

        <div className={styles.grid}>
          {logos.map((data, index) => {
            return (
              <Logo
                svg={svg}
                text={companyForm.description}
                style={{ background: data[0], fill: data[1], color: data[1] }}
                onClick={() => openModal(data)}
                key={index}
              />
            )
          })}
        </div>
      </div>

      <ModalLogo
        modalData={modalData}
        svg={svg}
        text={companyForm.description}
        isOpen={isModalOpen}
        closeModalCallback={closeModal}
      />
    </section>
  )
}

function Logo({
  svg,
  text,
  onClick,
  style,
}: {
  svg: ReactNode
  text: string
  onClick: () => void
  style: object
}) {
  return (
    <div className={styles.logo} style={style} onClick={onClick}>
      {svg}
      <p className="subtitle">{text}</p>
    </div>
  )
}
