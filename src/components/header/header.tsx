'use client';
import { BurgerIcon } from '@/images/icons/burger';
import logoImg from '@/images/logo.svg';
import {
  hideHeader as hideHeaderAction,
  selectHeaderVisibility,
  showHeader as showHeaderAction,
} from '@/lib/features/header/header-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ButtonArrow } from '@/ui/button/button-arrow';
import { TransitionLink } from '@/ui/transition-link';
import clsx from 'clsx';
import Lenis from 'lenis';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Modal } from '../modal/modal';
import styles from './header.module.scss';

function getAfterNumberSign(str: string) {
  const index = str.lastIndexOf('#');
  return index !== -1 ? str.slice(index + 1) : str;
}

function easeInOutSine(x: number) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}

type HeaderLink = {
  name: string;
  href?: string;
  toSection?: string;
};

const mainLinks = [
  {
    name: 'Сгенерировать лого в конструкторе',
    href: '/logo-builder/create',
  },
  { name: 'Заказать лого у студии', toSection: '#' },
  { name: 'Кейсы', href: '/cases' },
];
const secondLinks = [
  { name: 'О студии', toSection: '/#about' },
  { name: 'Что делаем?', toSection: '/#what-do' },
  { name: 'Кейсы', href: '/cases' },
  // { name: 'Генератор логотипов', href: '/logo-builder' },
];

export function Header() {
  const pathname = usePathname();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const isHeaderHidden = useAppSelector(selectHeaderVisibility);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenis = useLenis(handleScroll);

  const isConstructorPage = pathname.startsWith('/logo-builder');

  function toggleBurger() {
    setIsBurgerOpen((lastState) => !lastState);
  }

  useEffect(() => {
    if (!lenis) return;

    dispatch(showHeaderAction());

    if (isBurgerOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.start();
    };
  }, [isBurgerOpen, dispatch, lenis]);

  function handleScroll(lenis: Lenis | undefined) {
    if (!lenis || isBurgerOpen) return;

    if (lenis.direction === 1) {
      dispatch(hideHeaderAction());
    } else if (lenis.direction === -1) {
      dispatch(showHeaderAction());
    }
  }

  function handleLinkClick(link: HeaderLink) {
    setIsBurgerOpen(false);
    if (!lenis) return;
    lenis.start();

    if (link.href) {
    }

    if (link.toSection) {
      const id = getAfterNumberSign(link.toSection);
      lenis.scrollTo(`#${id}`, {
        offset: 100,
        duration: 0.8,
        easing: easeInOutSine,
      });
    }
  }

  const headerTranslate = isHeaderHidden
    ? 'translateY(-100%)'
    : 'translateY(0)';

  const linksList = isConstructorPage ? mainLinks : secondLinks;

  const lastLink = linksList[linksList.length - 1];

  const talkButtonText = isConstructorPage
    ? 'Оставить заявку'
    : 'Обсудим проект';

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
            onClick={toggleBurger}
          >
            <BurgerIcon className={styles.burgerIcon} />
          </button>

          <TransitionLink href="/">
            <Image src={logoImg} width={176} height={30} alt="Логотип Pixel" />
          </TransitionLink>

          <nav className={styles.nav}>
            <ul role="list">
              {linksList.map((link, index) => {
                return (
                  <li key={index}>
                    <HeaderLink link={link} callback={handleLinkClick} />
                  </li>
                );
              })}
            </ul>
          </nav>

          <ButtonArrow
            className={styles.talkButton}
            onClick={() => setIsModalOpen(true)}
            text={talkButtonText}
          />
        </div>
      </header>

      <div className={clsx(styles.burger, isBurgerOpen && styles._open)}>
        <div className={styles.bg} onClick={toggleBurger}></div>
        <div className={styles.burgerWrapper}>
          <div className="container">
            <nav className={clsx(styles.burgerNav, 'h3')}>
              <ul className={styles.burgerNavColumn} role="list">
                {linksList.map((link, index) => {
                  if (link === lastLink) return;

                  return (
                    <li key={index}>
                      <HeaderLink link={link} callback={handleLinkClick} />
                    </li>
                  );
                })}
              </ul>
              <ul className={styles.burgerNavColumn} role="list">
                <li>
                  <HeaderLink link={lastLink} callback={handleLinkClick} />
                </li>
              </ul>
            </nav>

            <ButtonArrow
              className={styles.talkButton}
              onClick={() => setIsModalOpen(true)}
              text={talkButtonText}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

function HeaderLink({
  link,
  callback,
}: {
  link: HeaderLink;
  callback: (link: HeaderLink) => void;
}) {
  if (link.href) {
    return (
      <TransitionLink className="button-text" href={link.href}>
        <span onClick={() => callback(link)}>{link.name}</span>
      </TransitionLink>
    );
  }

  const toSection = link.toSection;
  if (toSection) {
    return (
      <Link className="button-text" href={toSection} scroll={false}>
        <span onClick={() => callback(link)}>{link.name}</span>
      </Link>
    );
  }
}
