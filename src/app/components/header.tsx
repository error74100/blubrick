import Link from 'next/link';
import style from './header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Link href="/">logo</Link>

        <ul className={style.gnb}>
          <li>
            <Link href="/about">ABOUT</Link>
            <Link href="/menu">MENU</Link>
            <Link href="/news">NEWS</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
