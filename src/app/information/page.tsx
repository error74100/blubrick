'use client';

import 'aos/dist/aos.css';
import style from './page.module.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    AOS.init({
      // offset: 200,
      duration: 500,
    });
  }, []);

  return (
    <div className="subwrap">
      <div className="sub_visual type2">
        <h2 data-aos="fade-up">information</h2>
      </div>

      <div className="sub_content">
        <div className={style.information_intro}>
          <div className={style.inner}>
            <div className={style.contbox}>
              <ul className={style.group}>
                <li>
                  <p className={style.img}>
                    <img src="/img/sample_img01.jpg" alt="" />
                  </p>
                  <h2>소개 제목</h2>
                  <p className={style.indent}>
                    offcanvas while open. Consider leaving the default value
                  </p>
                </li>

                <li>
                  <p className={style.img}>
                    <img src="/img/sample_img01.jpg" alt="" />
                  </p>
                  <h2>소개 제목</h2>
                  <p className={style.indent}>
                    offcanvas while open. Consider leaving the default value
                  </p>
                  <p className={style.indent}>
                    22 offcanvas while open. Consider leaving the default value
                  </p>
                </li>

                <li>
                  <p className={style.img}>
                    <img src="/img/sample_img01.jpg" alt="" />
                  </p>
                  <h2>소개 제목</h2>
                  <p className={style.indent}>
                    offcanvas while open. Consider leaving the default value
                  </p>
                  <p className={style.indent}>
                    22 offcanvas while open. Consider leaving the default value
                  </p>
                </li>

                <li>
                  <p className={style.img}>
                    <img src="/img/sample_img01.jpg" alt="" />
                  </p>
                  <h2>소개 제목</h2>
                  <p className={style.indent}>
                    offcanvas while open. Consider leaving the default value
                  </p>
                </li>

                <li>
                  <p className={style.img}>
                    <img src="/img/sample_img01.jpg" alt="" />
                  </p>
                  <h2>소개 제목</h2>
                  <p className={style.indent}>
                    offcanvas while open. Consider leaving the default value
                  </p>
                  <p className={style.indent}>
                    offcanvas while open. Consider leaving the default value
                  </p>
                  <p className={style.indent}>
                    offcanvas while open. Consider leaving the default value
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
