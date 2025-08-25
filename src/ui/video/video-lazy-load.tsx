"use client"
import { useEffect, useRef, VideoHTMLAttributes } from "react"

export interface VideoSrc {
  webm: string
  mp4: string
  mobileWebm?: string
  mobileMp4?: string
}

export function VideoLazyLoad({
  src,
  className,
  videoProps = {},
}: {
  src: VideoSrc
  className?: string
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Lazy loading видео
  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLVideoElement
            const sources = target.querySelectorAll("source")
            sources.forEach((source) => {
              source.src = source.dataset.src || ""
            })

            target.load()

            obs.unobserve(target)
          }
        })
      },
      { rootMargin: "0px 0px 200px 0px", threshold: 0 },
    )

    observer.observe(videoEl)

    return () => observer.disconnect()
  }, [])

  // Автоматическое play/pause
  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoEl.readyState < 3) return
          if (entry.isIntersecting) {
            if (videoEl.paused) {
              videoEl.play()
            }
          } else {
            videoEl.pause()
          }
        })
      },
      { threshold: 0 },
    )

    visibilityObserver.observe(videoEl)

    return () => visibilityObserver.disconnect()
  }, [])

  return (
    <video
      {...videoProps}
      className={className}
      ref={videoRef}
      autoPlay
      muted
      loop
    >
      {src.mobileWebm && (
        <source
          data-src={src.mobileWebm}
          type="video/webm; codecs=av01.0.05M.08"
          media="(max-width:768px)"
        />
      )}
      {src.mobileMp4 && (
        <source
          data-src={src.mobileMp4}
          type="video/mp4"
          media="(max-width:768px)"
        />
      )}
      <source data-src={src.webm} type="video/webm; codecs=av01.0.05M.08" />
      <source data-src={src.mp4} type="video/mp4" />
    </video>
  )
}
