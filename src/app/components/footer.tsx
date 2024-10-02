import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <p>상호 : Moxen House</p>
        <p>주소 : 서울 동작구 만양로8길 69 (노량진동 222-5)</p>
        <p>TEL : 02-0000-0000 / e-mail : 0000@0000.com / 대표 : 000</p>
        <p>2024. Moxen House. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
