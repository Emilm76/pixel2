'use client';
import cubeImg from '@/images/icons/cube.svg';
import { Label } from '@/ui/label';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import { CubeMouseMove } from '../cube-mouse-move';
import styles from './questions-section.module.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function QuestionsSection() {
  const main = useRef(null);

  useGSAP(
    () => {
      const blocks: HTMLElement[] = gsap.utils.toArray('.animatedBlock');
      const blocksContent: HTMLElement[] = gsap.utils.toArray(
        '.animatedBlock .animatedContent'
      );

      blocks.forEach((block, index) => {
        gsap.to(blocksContent[index], {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'bottom-=20% bottom-=5%',
            // markers: true,
            // onEnter, onLeave, onEnterBack, onLeaveBack
            toggleActions: `play play play reverse`,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <section className="section-pt">
      <div className={clsx(styles.titleContainer, 'container')}>
        <h2 className={clsx(styles.title, 'h2 h-pb')}>Частые вопросы</h2>
        <CubeMouseMove className={styles.cube} parallaxSpeed={0.035}>
          <Image src={cubeImg} alt="" />
        </CubeMouseMove>
      </div>

      <div className={clsx(styles.questionsContainer, 'container')} ref={main}>
        <Question
          className={styles.firstBlock}
          id={1}
          title="Сколько будет стоить проект?"
          text="Стоимость работы варьируется в зависимости от её сложности и объёма. Чтобы получить более точное предложение, оставьте заявку на консультацию. После заполнения брифа, мы обсудим все детали и предоставим вам индивидуальную смету."
        />
        <Question
          className={clsx(styles.animatedBlock, 'animatedBlock')}
          id={2}
          title="Сотрудничаете ли вы с клиентами из других стран или городов?"
          text="Да, мы работаем с клиентами по всему миру в удалённом формате. Мы используем видеозвонки, электронную почту и мессенджеры для общения, а все необходимые файлы храним в облачном хранилище и передаём в цифровом виде."
        />
        <Question
          className={clsx(styles.animatedBlock, 'animatedBlock')}
          id={3}
          title="Как я могу следить за прогрессом проекта?"
          text="Мы регулярно информируем наших клиентов о ходе работы, предоставляем отчёты и согласовываем ключевые этапы."
        />
        <Question
          className={clsx(styles.animatedBlock, 'animatedBlock')}
          id={4}
          title="Предоставляете ли вы поддержку после завершения работы?"
          text="Да, мы предлагаем услуги технической помощи. Если вам понадобятся доработки или обновления, наша команда всегда готова помочь."
        />
        <Question
          className={clsx(styles.animatedBlock, 'animatedBlock')}
          id={5}
          title="Можете ли вы выделить команду для постоянной работы только над нашим проектом?"
          text="Определённо, для длительных проектов мы можем сформировать выделенную команду, которая будет заниматься решением текущих задач на протяжении нескольких месяцев или даже лет."
        />
      </div>
    </section>
  );
}

function Question({
  id,
  title,
  text,
  className,
}: {
  id: number;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={clsx(styles.blok, className)}>
      <div className={clsx(styles.animatedContent, 'animatedContent')}>
        <div className={styles.header}>
          <Label variant="number">{id}</Label>
          <h3 className="h3">{title}</h3>
        </div>
        <p className={styles.header}>{text}</p>
      </div>
    </div>
  );
}
