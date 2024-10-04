'use client';

import 'aos/dist/aos.css';
import style from './page.module.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
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
          src="/img/sub_visual_06.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={10}
        />

        <h2 data-aos="fade-up">Room Inquiry</h2>
      </div>

      <div className="sub_content">
        <div className={style.qna_intro}>
          <div className={style.inner}>
            <div className={style.contbox}>
              <h2 data-aos="fade-right">입실 문의</h2>
              <h3 data-aos="fade-right">궁금하신 점은 편하게 문의주세요.</h3>
            </div>

            <div className={style.group}>
              <p className={style.img}>
                <Image
                  width={100}
                  height={100}
                  src="/img/icon-headset.png"
                  alt="입실 문의 이미지"
                />
              </p>
              <div className={style.call}>
                <a href="tel:010-0000-0000">010-0000-0000</a>
                <p>(문의 가능시간 : 오전 09 ~ 오후 9시)</p>
              </div>

              <a href="tel:010-0000-0000" className="btn_basic1">
                전화하기
              </a>
            </div>
          </div>
        </div>

        <div className={`${style.qna_intro} ${style.faq_type}`}>
          <div className={style.inner}>
            <div className={style.contbox}>
              <h2 data-aos="fade-right">자주하는 질문</h2>
              <h3 data-aos="fade-right">
                자주 묻는 질문들에 친절히 답변 드립니다.
              </h3>
            </div>

            <Accordion className={style.faq_cont}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="q_tit">
                    자주하는 <br />
                    질문
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p className="q_tit">2 자주하는 질문</p>
                </Accordion.Header>
                <Accordion.Body>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p className="q_tit">3 자주하는 질문</p>
                </Accordion.Header>
                <Accordion.Body>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
