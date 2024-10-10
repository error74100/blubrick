'use client';

import 'aos/dist/aos.css';
import style from './page.module.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AOS from 'aos';
import { useEffect } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
          src="/img/sub_visual_03.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={50}
        />

        <h2 data-aos="fade-up">View Facilities</h2>
      </div>

      <div className="sub_content">
        <div className={style.facilities_intro}>
          <div className={style.inner}>
            <div className={style.contbox}>
              <h2 data-aos="fade-right">시설보기</h2>
              <h3 data-aos="fade-right">
                Similar to the Nav component, you can force the contents of your
                Tabs to extend the full available width.
              </h3>
            </div>
          </div>

          <div className={style.slider_wrap}>
            <Tabs
              defaultActiveKey="personal"
              id="fill-tab-facilities"
              className={`${style.slide_tabs} mb-3`}
              fill
            >
              <Tab eventKey="personal" title="개인 시설">
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
                    <p className={style.img_pc}>
                      <Image
                        width={1920}
                        height={700}
                        src="/img/facilities_slide_personal_01.jpg"
                        alt="개인시설 이미지 1"
                      />
                    </p>
                    <p className={style.img_m}>
                      <Image
                        width={1000}
                        height={1000}
                        src="/img/facilities_slide_personal_01_m.jpg"
                        alt="개인시설 이미지 1"
                      />
                    </p>
                  </SwiperSlide>
                  <SwiperSlide className={style.slide_item}>
                    <p className={style.img_pc}>
                      <Image
                        width={1920}
                        height={700}
                        src="/img/facilities_slide_personal_02.jpg"
                        alt="개인시설 이미지 2"
                      />
                    </p>
                    <p className={style.img_m}>
                      <Image
                        width={1000}
                        height={1000}
                        src="/img/facilities_slide_personal_02_m.jpg"
                        alt="개인시설 이미지 2"
                      />
                    </p>
                  </SwiperSlide>
                </Swiper>
              </Tab>
              <Tab eventKey="common" title="공동 시설">
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
                    <p className={style.img_pc}>
                      <Image
                        width={1920}
                        height={700}
                        src="/img/facilities_slide_personal_01.jpg"
                        alt="개인시설 이미지 1"
                      />
                    </p>
                    <p className={style.img_m}>
                      <Image
                        width={1000}
                        height={1000}
                        src="/img/facilities_slide_personal_01_m.jpg"
                        alt="개인시설 이미지 1"
                      />
                    </p>
                  </SwiperSlide>
                  <SwiperSlide className={style.slide_item}>
                    <p className={style.img_pc}>
                      <Image
                        width={1920}
                        height={700}
                        src="/img/facilities_slide_personal_02.jpg"
                        alt="개인시설 이미지 2"
                      />
                    </p>
                    <p className={style.img_m}>
                      <Image
                        width={1000}
                        height={1000}
                        src="/img/facilities_slide_personal_02_m.jpg"
                        alt="개인시설 이미지 2"
                      />
                    </p>
                  </SwiperSlide>
                </Swiper>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
