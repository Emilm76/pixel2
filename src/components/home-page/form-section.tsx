import { Form } from '@/components/form/form';
import { VideoLazyLoad } from '@/ui/video/video-lazy-load';
import clsx from 'clsx';
import styles from './form-section.module.scss';

export function FormSection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.videoContainer, 'container')}>
        <div className={styles.videoWrapper}>
          <VideoLazyLoad
            className={styles.video}
            src={{
              webm: '/video/purple-cubes-45-2100-656.webm',
              mp4: '/video/purple-cubes-30-2100-656.mp4',
              mobileWebm: '/video/purple-cubes-53-768-400.webm',
              mobileMp4: '/video/purple-cubes-31-786-400.mp4',
            }}
            videoProps={{
              poster: '/images/purple-cubes-preview.jpg',
              width: '1920',
              height: '600',
            }}
          />
        </div>
      </div>

      <div className={clsx(styles.formContainer, 'container')}>
        <h3 className="h3">
          Получите коммерческое предложение с расчётом стоимости и сроков всего
          за 1 день
        </h3>
        <div className={styles.formWrapper}>
          <Form variant="md" />
        </div>
      </div>
    </section>
  );
}
