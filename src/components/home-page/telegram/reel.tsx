'use client';
import playImg from '@/images/icons/play.svg';
import { VideoSrc } from '@/ui/video/video-lazy-load';
import { VideoLazyPlay } from '@/ui/video/video-lazy-play';
import Image, { StaticImageData } from 'next/image';
import { useState, VideoHTMLAttributes } from 'react';
import styles from './reel.module.scss';

export function Reel({
  previewImage,
  videoSrc,
  videoProps = {},
}: {
  previewImage: StaticImageData;
  videoSrc: VideoSrc;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
}) {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsPlay(true)}
      onMouseLeave={() => setIsPlay(false)}
    >
      <div className={styles.preview}>
        <Image
          className={styles.previewImage}
          src={previewImage}
          width={435}
          height={700}
          alt=""
        />
        <Image
          className={styles.playImage}
          src={playImg}
          width={75}
          height={50}
          alt=""
        />
      </div>

      <VideoLazyPlay
        isPlay={isPlay}
        className={styles.video}
        src={videoSrc}
        videoProps={{
          ...videoProps,
          width: '435',
          height: '700',
        }}
      />
    </div>
  );
}
