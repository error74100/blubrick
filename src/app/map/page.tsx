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
        <h2 data-aos="fade-up">map</h2>
      </div>

      <div className="sub_content">
        <div className={style.map_intro}>
          <div className={style.inner}>
            <div className={style.contbox}>
              <h2 data-aos="fade-right">소개 제목</h2>
              <h3 data-aos="fade-right">소개 소제목</h3>
            </div>

            <div className={style.map}>map..</div>

            <div className={style.map_info}>
              <h4>오시는길</h4>
              <p className={style.desc}>
                dd
                <br />
                2222
              </p>

              <h4>주 소</h4>
              <p className={style.desc}>(주 소 ...)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
