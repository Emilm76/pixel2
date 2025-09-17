import { Form } from "@/components/form/form"
import { VideoLazyLoad } from "@/ui/video/video-lazy-load"
import clsx from "clsx"
import styles from "./form-section.module.scss"

export function FormSection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.videoContainer, "container")}>
        <VideoLazyLoad
          className={styles.video}
          src={{
            webm: "/video/purple-abstract-45-1280.webm",
            mp4: "/video/purple-abstract-30-1280.mp4",
            mobileWebm: "/video/purple-abstract-45-768-400.webm",
            mobileMp4: "/video/purple-abstract-30-768-400.mp4",
          }}
          videoProps={{
            poster: "/images/purple-abstract-preview.jpg",
            width: "960",
            height: "760",
          }}
        />
      </div>

      <div className={clsx(styles.formContainer, "container")}>
        <div>
          <h3 className={clsx(styles.title, "h3")}>
            Начните продвижение с нами сейчас
          </h3>
          <p className={clsx(styles.subtitle, "p1")}>
            Сделайте запрос, и мы подготовим план продвижения вашего проекта
          </p>
        </div>
        <div className={styles.formWrapper}>
          <Form />
        </div>
      </div>
    </section>
  )
}
