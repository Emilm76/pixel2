import clsx from "clsx"
import { ColorsSlider } from "./colors-slider"
import { FontsSlider } from "./fonts-slider"
import styles from "./style-section.module.scss"

export function StyleSection() {
  return (
    <section className="section-pt">
      <div className={styles.fontsGrid}>
        <div className={clsx(styles.container, "container")}>
          <div className={styles.textBlock}>
            <h3 className="h3">
              Подбор <span className="purple">уникальных</span> шрифтов
            </h3>
            <p>
              Используем в айдентике высококачественные персональные
              лицензированные шрифты, которые соответствуют стилю и характеру
              вашего бренда. Например, строгий шрифт подойдёт для финансовой
              компании, а игривый — для детского магазина.
            </p>
          </div>
          <div className={styles.fontBlock}>
            <FontsSlider />
          </div>
        </div>
      </div>

      <div className={styles.colorGrid}>
        <div className={clsx(styles.container, "container")}>
          <div className={styles.textBlock}>
            <h3 className="h3">
              Создание идеальной{" "}
              <span className="purple">цветовой палитры</span>
            </h3>
            <p>
              Цвета играют ключевую роль в брендинге и дизайне, поскольку
              они могут вызывать эмоции, привлекать внимание и формировать
              ассоциации с вашей компанией или продуктом. Правильный выбор цвета
              для вашего логотипа и других элементов бренда может значительно
              повлиять на восприятие компании и её успех.
            </p>
          </div>
          <div className={styles.colorsBlock}>
            <ColorsSlider />
          </div>
        </div>
      </div>
    </section>
  )
}
