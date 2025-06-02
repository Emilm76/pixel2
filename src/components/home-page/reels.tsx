'use client';
import playImg from '@/images/icons/play.svg';
import hermitageImg from '@/images/reels/hermitage.jpg';
import pechorinImg from '@/images/reels/pechorin.jpg';
import poletImg from '@/images/reels/polet.jpg';
import remontStyleImg from '@/images/reels/remont-style.jpg';
import { VideoSrc } from '@/ui/video/video-lazy-load';
import { VideoLazyPlay } from '@/ui/video/video-lazy-play';
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import { useState, VideoHTMLAttributes } from 'react';
import styles from './reels.module.scss';

const images = [
  {
    previewImage: hermitageImg,
    videoSrc: {
      webm: '/video/reels/hermitage-45-550.webm',
      mp4: '/video/reels/hermitage-30-550.mp4',
    },
  },
  {
    previewImage: pechorinImg,
    videoSrc: {
      webm: '/video/reels/pechorin-45-550.webm',
      mp4: '/video/reels/pechorin-30-550.mp4',
    },
  },
  {
    previewImage: poletImg,
    videoSrc: {
      webm: '/video/reels/polet-45-550.webm',
      mp4: '/video/reels/polet-30-550.mp4',
    },
  },
  {
    previewImage: remontStyleImg,
    videoSrc: {
      webm: '/video/reels/remont-style-45-550.webm',
      mp4: '/video/reels/remont-style-30-550.mp4',
    },
  },
];

export function Reels() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className={clsx(styles.container, 'embla__container')}>
        {images.map((imageProps, index) => {
          return (
            <div className="embla__slide" key={index}>
              <Reel {...imageProps} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Reel({
  previewImage,
  videoSrc,
  videoProps = {},
}: {
  previewImage: StaticImageData;
  videoSrc: VideoSrc;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
}) {
  const [isPlay, setIsPlay] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  return (
    <div
      className={clsx(styles.card, isLoad && styles.load)}
      onMouseEnter={() => setIsPlay(true)}
      onMouseLeave={() => setIsPlay(false)}
    >
      <div className={styles.preview}>
        <Image className={styles.previewImage} src={previewImage} alt="" />
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
        loadCallback={() => setIsLoad(true)}
        videoProps={{
          ...videoProps,
          width: '435',
          height: '700',
        }}
      />
    </div>
  );
}
