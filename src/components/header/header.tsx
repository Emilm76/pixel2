'use client';
import { BurgerIcon } from '@/images/icons/burger';
import logoImg from '@/images/logo.svg';
import { ButtonArrow } from '@/ui/button/button-arrow';
import clsx from 'clsx';
import Lenis from 'lenis';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';

export function Header() {
  const pathname = usePathname();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const lenis = useLenis(handleScroll);

  const isConstructorPage = pathname.startsWith('/constructor');

  function handleBurgerBtnClick() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  useEffect(() => {
    if (!lenis) return;

    setHideHeader(false);

    if (isBurgerOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.start();
    };
  }, [isBurgerOpen]);

  function handleScroll(lenis: Lenis | undefined) {
    if (!lenis) return;
    if (isBurgerOpen) return;

    if (lenis.direction === 1) {
      setHideHeader(true);
    } else if (lenis.direction === -1) {
      setHideHeader(false);
    }
  }

  const headerTranslate = hideHeader ? 'translateY(-100%)' : 'translateY(0)';

  const linksList = isConstructorPage
    ? [
        { name: 'Сгенерировать лого в конструкторе', href: '/' },
        { name: 'Заказать лого у студии', href: '/' },
        { name: 'Кейсы', href: '#cases' },
      ]
    : [
        { name: 'О студии', href: '/' },
        { name: 'Что делаем?', href: '/' },
        { name: 'Кейсы', href: '/cases' },
        { name: 'Генератор логотипов', href: '/constructor' },
      ];

  const lastLink = linksList[linksList.length - 1];

  const talkButton = isConstructorPage ? (
    <ButtonArrow className={styles.talkButton} text="Оставить заявку" />
  ) : (
    <ButtonArrow className={styles.talkButton} text="Обсудим проект" />
  );

  return (
    <>
      <header
        className={clsx(styles.header, isBurgerOpen && styles._open)}
        style={{ transform: headerTranslate }}
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
              {linksList.map((link, index) => (
                <li className="button-text" key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {talkButton}
        </div>
      </header>

      <div className={clsx(styles.burger, isBurgerOpen && styles._open)}>
        <div className={styles.bg} onClick={handleBurgerBtnClick}></div>
        <div className={styles.burgerWrapper}>
          <div className="container">
            <nav className={clsx(styles.burgerNav, 'h3')}>
              <ul className={styles.burgerNavColumn} role="list">
                {linksList.map((link, index) => {
                  if (link === lastLink) return;

                  return (
                    <li className="button-text" key={index}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul className={styles.burgerNavColumn} role="list">
                <li className="button-text">
                  <Link href={lastLink.href}>{lastLink.name}</Link>
                </li>
              </ul>
            </nav>

            {talkButton}
          </div>
        </div>
      </div>
    </>
  );
}
