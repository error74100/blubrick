'use client';

import style from './page.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <>
      <section className={style.movie}>
        <video autoPlay muted loop>
          <source src="/mv/sample_mv.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </section>

      <section className={style.slide}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={style.slide_item}>
            <img src="/img/sample_img01.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className={style.slide_item}>
            <img src="/img/sample_img02.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className={style.intro} id="parallax">
        <p className={style.txt01}>home ... 3</p>
        <p className={style.txt02}>home ... 3</p>
        <p className={style.btn}>
          <Button variant="primary">Primary</Button>{' '}
        </p>
      </section>

      <section className={style.news}>home ... 4</section>
    </>
  );
}
