'use client';

import { BurgerIcon } from '@/images/icons/burger';
import logoImg from '@/images/logo.svg';
import { ButtonArrow } from '@/ui/button-arrow/button-arrow';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';

export function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  // const [isScrollDown, setIsScrollDown] = useState(false);
  // const lenis = useLenis(handleScroll);

  function handleBurgerBtnClick() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isBurgerOpen]);

  // function handleScroll(lenis: Lenis | undefined) {
  //   if (!lenis) return;

  //   console.log(lenis.direction);

  //   if (lenis.direction === 1) {
  //     setIsScrollDown(true);
  //   } else if (lenis.direction === -1) {
  //     setIsScrollDown(false);
  //   }
  // }

  // const headerTranslate = isScrollDown ? '-100%' : '0';

  return (
    <>
      <header
        className={clsx(styles.header, isBurgerOpen && styles._open)}
        // style={{ transform: `translateY(${headerTranslate})` }}
      >
        <div className={clsx(styles.container, 'container')}>
          <button
            type="button"
            className={styles.burgerButton}
            onClick={handleBurgerBtnClick}
          >
            <BurgerIcon className={styles.burgerIcon} />
          </button>

          <Link href="/">
            <Image src={logoImg} alt="Логотип Pixel" width={176} height={30} />
          </Link>

          <nav className={styles.nav}>
            <ul role="list">
              <li className="button-text">
                <Link href="/">О студии</Link>
              </li>
              <li className="button-text">
                <Link href="/">Что делаем?</Link>
              </li>
              <li className="button-text">
                <Link href="/cases">Кейсы</Link>
              </li>
              <li className="button-text">
                <Link href="/constructor">Генератор логотипов</Link>
              </li>
            </ul>
          </nav>

          <ButtonArrow className={styles.talkButton} text="Обсудим проект" />
        </div>
      </header>

      <div className={clsx(styles.burger, isBurgerOpen && styles._open)}>
        <div className={styles.bg} onClick={handleBurgerBtnClick}></div>
        <div className={styles.burgerWrapper}>
          <div className="container">
            <nav className={clsx(styles.burgerNav, 'h3')}>
              <ul className={styles.burgerNavColumn} role="list">
                <li>
                  <Link href="/">О студии</Link>
                </li>
                <li>
                  <Link href="/">Что делаем?</Link>
                </li>
                <li>
                  <Link href="/cases">Кейсы</Link>
                </li>
              </ul>
              <ul className={styles.burgerNavColumn} role="list">
                <li>
                  <Link href="/constructor">Генератор логотипов</Link>
                </li>
              </ul>
            </nav>

            <ButtonArrow
              className={styles.burgerTalkButton}
              text="Обсудим проект"
            />
          </div>
        </div>
      </div>
    </>
  );
}
