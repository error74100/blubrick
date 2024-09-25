'use client';

import style from './page.module.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null); // 해당 섹션을 참조할 ref 생성

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true); // 뷰포트에 들어왔을 때 'active' 상태로 설정
        } else {
          setIsActive(false); // 뷰포트에서 벗어나면 'active' 상태 해제
        }
      },
      { threshold: 0.8 } // 요소의 10%가 뷰포트에 들어왔을 때 트리거
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // sectionRef를 관찰 대상으로 설정
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // 컴포넌트가 언마운트될 때 옵저버 해제
      }
    };
  }, []);

  return (
    <>
      <section className={style.movie}>
        <video autoPlay muted loop>
          <source src="/mv/sample_mv.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
        <div className={style.inner}>
          <h2>ddd ddd</h2>
          <p>asdfsdf asdf</p>
          <p>asdfsdf asdf</p>
        </div>
      </section>

      <section className={style.slide}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className={style.slide_item}>
            <img src="/img/[temp]main_slidebanner_01.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className={style.slide_item}>
            <img src="/img/[temp]main_slidebanner_01.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className={style.slide_item}>
            <img src="/img/[temp]main_slidebanner_01.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className={style.intro}>
        <h3 className={style.h3_type}>소개 / {offsetY}</h3>
        <p>asdf asdfa sasdf</p>
        <p>22 asdf asdfa sasdf</p>
        <p className={style.btn}>
          <Button variant="primary">Primary</Button>{' '}
        </p>
        <div
          ref={sectionRef}
          // className={style.bg_item}
          className={
            isActive ? `${style.bg_item} ${style.active}` : style.bg_item
          }
        ></div>
      </section>

      <section className={style.qna}>
        <div className={style.inner}>
          <h3 className={style.h3_type}>입실 문의</h3>
          <p>asdf asdfa sasdf</p>
          <p>22 asdf asdfa sasdf</p>
        </div>
      </section>
    </>
  );
}
