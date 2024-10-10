'use client';

import Link from 'next/link';
import style from './header.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <>
      <button onClick={handleShow} className={style.m_menu_btn}>
        <div className={style.hamburger_menu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        {...props}
        className={style.m_menu_wrap}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link href="/">logo</Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul className={style.gnb}>
              <li>
                <Link
                  href="/about"
                  className={pathname === '/about' ? `${style.active}` : ''}
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  href="/information"
                  className={
                    pathname === '/information' ? `${style.active}` : ''
                  }
                >
                  생활안내
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className={
                    pathname === '/facilities' ? `${style.active}` : ''
                  }
                >
                  시설보기
                </Link>
              </li>
              <li>
                <Link
                  href="/environment"
                  className={
                    pathname === '/environment' ? `${style.active}` : ''
                  }
                >
                  주변환경
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className={pathname === '/map' ? `${style.active}` : ''}
                >
                  오시는길
                </Link>
              </li>
              <li>
                <Link
                  href="/qna"
                  className={pathname === '/qna' ? `${style.active}` : ''}
                >
                  입실문의
                </Link>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드럽게 스크롤
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
        setIsVisible(true);
      } else {
        setIsFixed(false);
        setIsVisible(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={isFixed ? `${style.header} ${style.active}` : style.header}
      >
        <div className={style.inner}>
          <Link href="/">logo</Link>

          <ul className={style.gnb}>
            <li>
              <Link
                href="/about"
                className={pathname === '/about' ? `${style.active}` : ''}
              >
                소개
              </Link>
              <Link
                href="/information"
                className={pathname === '/information' ? `${style.active}` : ''}
              >
                생활안내
              </Link>
              <Link
                href="/facilities"
                className={pathname === '/facilities' ? `${style.active}` : ''}
              >
                시설보기
              </Link>
              <Link
                href="/environment"
                className={pathname === '/environment' ? `${style.active}` : ''}
              >
                주변환경
              </Link>
              <Link
                href="/map"
                className={pathname === '/map' ? `${style.active}` : ''}
              >
                오시는길
              </Link>
              <Link
                href="/qna"
                className={pathname === '/qna' ? `${style.active}` : ''}
              >
                입실문의
              </Link>
            </li>
          </ul>

          {/* mobile menu */}
          <OffCanvasExample placement={'end'} name={'end'} />
        </div>
      </header>

      {isVisible && (
        <div className={style.go_top}>
          <button className={style.go_top_btn} onClick={scrollToTop}>
            to TOP
          </button>
        </div>
      )}
    </>
  );
}
