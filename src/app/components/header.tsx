'use client';

import Link from 'next/link';
import style from './header.module.css';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
      </div>
    </header>
  );
}
