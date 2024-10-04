'use client';

import 'aos/dist/aos.css';
import style from './page.module.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';

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
        <Image
          src="/img/sub_visual_02.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={10}
        />

        <h2 data-aos="fade-up">Living Guide</h2>
      </div>

      <div className="sub_content">
        <div className={style.information_intro}>
          <div className={style.inner}>
            <div className={style.contbox}>
              <ul className={style.group}>
                <li>
                  <div className={style.img_wrap}>
                    <p className={style.img} data-aos="fade-right">
                      <Image
                        width={740}
                        height={470}
                        src="/img/temp_information_img_01.jpg"
                        alt="풀옵션 원룸텔 이미지"
                      />
                    </p>
                  </div>

                  <div className={style.cont_wrap} data-aos="fade-left">
                    <h2>풀옵션 원룸텔</h2>
                    <p className={style.indent}>
                      개인 냉장고, 옷장, 책장 포함이며 벽돌시공으로 소음이
                      적습니다.
                    </p>
                    <p className={style.indent}>
                      방에 따라 베란다, 개인 화장실, 샤워실, 개인 에어컨
                      포함입니다.
                    </p>
                  </div>
                </li>

                <li>
                  <div className={style.img_wrap}>
                    <p className={style.img} data-aos="fade-left">
                      <Image
                        width={740}
                        height={470}
                        src="/img/temp_information_img_01.jpg"
                        alt="인터넷 환경 이미지"
                      />
                    </p>
                  </div>

                  <div className={style.cont_wrap} data-aos="fade-right">
                    <h2>인터넷 환경</h2>
                    <p className={style.indent}>
                      초고속 wifi 설치되어 있습니다.
                    </p>
                  </div>
                </li>

                <li>
                  <div className={style.img_wrap}>
                    <p className={style.img} data-aos="fade-right">
                      <Image
                        width={740}
                        height={470}
                        src="/img/temp_information_img_01.jpg"
                        alt="주방시설 및 세탁 이미지"
                      />
                    </p>
                  </div>

                  <div className={style.cont_wrap} data-aos="fade-left">
                    <h2>주방시설 및 세탁</h2>
                    <p className={style.indent}>
                      밥솥, 정수기, 인덕션, 전자레인지, 냄비, 그릇, 수저, 라면,
                      쌀 등이 있습니다.
                    </p>
                    <p className={style.indent}>
                      세탁기, 세탁세제 등이 있습니다.
                    </p>
                  </div>
                </li>

                <li>
                  <div className={style.img_wrap}>
                    <p className={style.img} data-aos="fade-left">
                      <Image
                        width={740}
                        height={470}
                        src="/img/temp_information_img_01.jpg"
                        alt="소방시설 이미지"
                      />
                    </p>
                  </div>

                  <div className={style.cont_wrap} data-aos="fade-right">
                    <h2>소방시설</h2>
                    <p className={style.indent}>
                      자동 화재감지시스템 및 스프링클러가 장착되어 있습니다.
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
