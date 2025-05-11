'use client';
import { useEffect, useRef, VideoHTMLAttributes } from 'react';
import { VideoSrc } from './video-lazy-load';

export function VideoLazyPlay({
  isPlay,
  src,
  className,
  videoProps = {},
}: {
  isPlay: boolean;
  src: VideoSrc;
  className?: string;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Lazy loading видео
    if (isPlay && !isLoadedRef.current) {
      const sources = videoEl.querySelectorAll('source');
      sources.forEach((source) => {
        source.src = source.dataset.src || '';
      });

      videoEl.load();
      isLoadedRef.current = true;
    }

    if (!isLoadedRef.current) return;

    // Автоматическое play/pause
    if (isPlay) {
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {
        console.error('video play error');
      });
    } else {
      videoEl.pause();
    }
  }, [isPlay]);

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
          type="video/webm"
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
      <source data-src={src.webm} type="video/webm" />
      <source data-src={src.mp4} type="video/mp4" />
    </video>
  );
}
