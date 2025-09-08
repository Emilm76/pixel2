"use client"

import clsx from "clsx"
import { Case } from "../domain/case"
import { CaseCard } from "../ui/case-card"
import styles from "./cases-section.module.scss"

export function CasesList({ cases }: { cases: Case[] }) {
  return (
    <section className="section-pt">
      <div className={clsx(styles.grid, "container")}>
        {cases.map((caseItem) => (
          <CaseCard caseItem={caseItem} onClick={() => {}} key={caseItem.id} />
        ))}
      </div>
    </section>
  )
}
