import cubeImg from "@/images/icons/cube.svg"
import clsx from "clsx"
import Image from "next/image"
import { ReactNode } from "react"
import { CubeMouseMove } from "../cube-mouse-move"
import styles from "./cases-title.module.scss"

export function CasesTitle({ children }: { children: ReactNode }) {
  return (
    <div className={clsx(styles.wrapper, "container")}>
      <h2 className={clsx(styles.title, "h3 h-pb")}>
        Каждый проект в нашей компании — это комплекс услуг от А до Я, который
        включает{" "}
        <span className="purple">
          аналитику, проектирование, дизайн, разработку
        </span>{" "}
        и вывод продукта на рынок.
      </h2>
      {children}

      <CubeMouseMove className={styles.cube} parallaxSpeed={0.03}>
        <Image src={cubeImg} alt="" />
      </CubeMouseMove>
    </div>
  )
}
