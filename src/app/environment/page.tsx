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
      <div className="sub_visual type4">
        <h2 data-aos="fade-up">Surrounding Environment</h2>
      </div>

      <div className="sub_content">
        <div className={style.environment_intro}>
          <div className={style.inner}>
            <div className={style.contbox}>
              <ul className={style.group}>
                <li>
                  <div className={style.img_wrap}>
                    <p className={style.img} data-aos="fade-right">
                      <img
                        src="/img/temp_environment_img_01.jpg"
                        alt="주변환경 이미지"
                      />
                    </p>
                  </div>

                  <div className={style.cont_wrap}>
                    <h2 data-aos="fade-left">주변환경</h2>
                    <p className={style.indent} data-aos="fade-left">
                      주변에도 소음을 유발하는 영업장이 없어서 조용합니다.
                    </p>
                    <p className={style.indent} data-aos="fade-left">
                      1층에 편의점과 커피 전문점 입점해있으며 1분거리 수협이
                      있어서 생활하기 편리한 곳입니다.
                    </p>
                  </div>
                </li>

                <li>
                  <div className={style.img_wrap}>
                    <p className={style.img} data-aos="fade-left">
                      <img
                        src="/img/temp_environment_img_01.jpg"
                        alt="교통환경 이미지"
                      />
                    </p>
                  </div>

                  <div className={style.cont_wrap}>
                    <h2 data-aos="fade-right">교통환경</h2>
                    <p className={style.indent} data-aos="fade-right">
                      노량진역 1,9호선에서 5분거리.
                    </p>
                    <p className={style.indent} data-aos="fade-right">
                      삼익 수협 마트바로 뒤.
                    </p>

                    <br />

                    <p
                      className={`${style.indent} ${style.type2}`}
                      data-aos="fade-right"
                    >
                      <b>＊버스노선</b>
                    </p>
                    <p
                      className={`${style.indent} ${style.type2}`}
                      data-aos="fade-right"
                    >
                      <span className="badge bg-primary">일반</span> 100, 200,
                      300
                    </p>
                    <p
                      className={`${style.indent} ${style.type2}`}
                      data-aos="fade-right"
                    >
                      <span className="badge bg-success">좌석</span> 1000, 2022
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
