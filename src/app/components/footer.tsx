import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <p>상호 : Blu Brick</p>
        <p>(주소...)</p>
        <p>TEL : 02-0000-0000 / e-mail : 0000@0000.com / 대표 : 000</p>
        <p>2024. Blu Brick. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
