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
      <div className="sub_visual">
        <h2 data-aos="fade-up">About</h2>
      </div>

      <div className="sub_content">
        <div className={style.about_intro}>
          <div className={style.inner}>
            <div className={style.contbox} data-aos="fade-right">
              <h3>소개 소제목</h3>
              <h2>소개 제목</h2>
              <p>
                When true The offcanvas will prevent focus from leaving the
                offcanvas while open. Consider leaving the default value here,
                as it is necessary to make the offcanvas work well with
                assistive technologies, such as screen readers.
              </p>
            </div>
            <div className={style.cont_img} data-aos="fade-left">
              <img src="/img/about-intro-img.png" alt="" />
            </div>
          </div>
        </div>

        <div className={style.about_info}>
          <div className={style.inner}>
            <div className={style.contbox} data-aos="fade-right">
              <h2>about 2</h2>
              <p>
                When true The offcanvas will prevent focus from leaving the
                offcanvas while open.
                <br />
                Consider leaving the default value here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
