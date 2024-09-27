'use client';

import 'aos/dist/aos.css';
import style from './page.module.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

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
        <h2 data-aos="fade-up">qna</h2>
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
                <img src="/img/icon-telephone.png" alt="" />
              </p>
              <p className={style.call}>
                <a href="tel:010-0000-0000">010-0000-0000</a>
              </p>
            </div>
          </div>
        </div>

        <div className={`${style.qna_intro} ${style.faq_type}`}>
          <div className={style.inner}>
            <div className={style.contbox}>
              <h2 data-aos="fade-right">자주하는 질문</h2>
              <h3 data-aos="fade-right">
                Build vertically collapsing accordions in combination with the
                Collapse component.
              </h3>
            </div>

            <Accordion defaultActiveKey="0" className={style.faq_cont}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>01. 자주하는 질문</Accordion.Header>
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
                <Accordion.Header>02. 자주하는 질문</Accordion.Header>
                <Accordion.Body>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>03. 자주하는 질문</Accordion.Header>
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
