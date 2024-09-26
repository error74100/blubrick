'use client';

import style from './page.module.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null); // 해당 섹션을 참조할 ref 생성
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      // offset: 200,
      duration: 500,
    });

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
        <div className={style.inner} data-aos="fade-up">
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
        <h3 className={style.h3_type} data-aos="fade-up">
          시설 소개
        </h3>
        <p data-aos="fade-left" data-aos-delay="500">
          asdf asdfa sasdf
        </p>
        <p data-aos="fade-left" data-aos-delay="500">
          22 asdf asdfa sasdf
        </p>

        <div className={style.inner}>
          <ul>
            <li>
              <p className={style.img}>
                <img src="/img/icon-toilet.png" alt="각방 화장실 이미지" />
              </p>
              <p>각방 화장실</p>
            </li>
            <li>
              <p className={style.img}>
                <img src="/img/icon-single-bed.png" alt="편안한 침대 이미지" />
              </p>
              <p>편안한 침대</p>
            </li>
            <li>
              <p className={style.img}>
                <img src="/img/icon-work-table.png" alt="책상, 의자 이미지" />
              </p>
              <p>책상, 의자</p>
            </li>
            <li>
              <p className={style.img}>
                <img src="/img/icon-wifi.png" alt="각방 WI-FI 이미지" />
              </p>
              <p>각방 WI-FI</p>
            </li>
          </ul>
        </div>

        <p className={style.btn}>
          <Button
            variant="primary"
            onClick={() => {
              router.push('/facilities');
            }}
          >
            자세히 보기
          </Button>
        </p>

        <div
          ref={sectionRef}
          className={
            isActive ? `${style.bg_item} ${style.active}` : style.bg_item
          }
        ></div>
      </section>

      <section className={style.qna}>
        <div className={style.inner}>
          <h3 className={style.h3_type} data-aos="fade-up">
            입실 문의
          </h3>
          <p data-aos="fade-left" data-aos-delay="500">
            궁금하신 점은 편하게 문의주세요.
          </p>
          <p className={style.img}>
            <img src="/img/icon-telephone.png" alt="" />
          </p>
          <p className={style.call}>
            <a href="tel:010-0000-0000">010-0000-0000</a>
          </p>
        </div>
      </section>
    </>
  );
}
