'use client';

import Link from 'next/link';
import style from './header.module.css';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);

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
            <Link href="/about">소개</Link>
            <Link href="/information">생활안내</Link>
            <Link href="/facilities">시설보기</Link>
            <Link href="/environment">주변환경</Link>
            <Link href="/map">오시는길</Link>
            <Link href="/qna">입실문의</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
