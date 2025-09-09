"use client"
import { Tag } from "@/modules/cases-list/domain/tag"
import clsx from "clsx"
import styles from "./case-filter.module.scss"

export function CasesFilter({
  tags,
  select,
  callback,
}: {
  tags: Tag[]
  select: string
  callback: (value: string) => void
}) {
  return (
    <ul className={styles.grid} role="list">
      <li
        className={clsx(select === "all" && styles.checked)}
        onClick={() => callback("all")}
      >
        Все
      </li>
      {tags.map((tag) => (
        <li
          className={clsx(tag === select && styles.checked)}
          onClick={() => callback(tag)}
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
