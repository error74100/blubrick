'use client';

import 'aos/dist/aos.css';
import style from './page.module.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Image from 'next/image';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Page() {
  // const [map, setMap] = useState(null); // 지도 객체
  const address = '서울 동작구 만양로8길 69'; // 원하는 주소
  const addressName = '모젠리빙텔'; // 원하는 주소

  const kakaoMap = () => {
    const kakaoMapScript = document.createElement('script');

    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        initMap();
      });
    };

    const initMap = () => {
      const container = document.getElementById('map'); // 지도 표시할 div
      if (!container) return;

      const options = {
        center: new window.kakao.maps.LatLng(
          37.51036817596226,
          126.9455596118595
        ), // 기본 좌표
        level: 4, // 지도 확대 레벨
      };

      const mapInstance = new window.kakao.maps.Map(container, options); // 지도 생성
      // setMap(mapInstance); // 지도 객체 저장

      // 주소로 위치를 검색 후 지도에 마커 표시
      searchAddressToCoordinate(address, mapInstance);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      const zoomControl = new window.kakao.maps.ZoomControl();
      mapInstance.addControl(
        zoomControl,
        window.kakao.maps.ControlPosition.RIGHT
      );
    };

    if (window.kakao && window.kakao.maps) {
      initMap(); // Kakao 지도 객체가 이미 존재할 때
    } else {
      kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
    }

    return () => window.removeEventListener('kakaoMapLoaded', initMap); // Cleanup
  };

  // 주소로 좌표 검색 후 지도에 마커를 표시하는 함수
  const searchAddressToCoordinate = (address: string, map: any) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (result: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도 중심을 검색된 좌표로 이동
        map.setCenter(coords);

        // // 마커를 해당 좌표에 표시
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 커스텀 오버레이에 표시할 내용입니다
        // HTML 문자열 또는 Dom Element 입니다
        const content = `'<div class=${style.map_marker}><span>${addressName}</span></div>'`;

        // 커스텀 오버레이를 생성합니다
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: coords,
          content: content,
        });

        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map, marker);
      } else {
        alert('주소 검색에 실패했습니다.');
      }
    });
  };

  useEffect(() => {
    AOS.init({
      // offset: 200,
      duration: 500,
    });

    kakaoMap();
  }, []);

  return (
    <>
      <div className="subwrap">
        <div className="sub_visual">
          <Image
            src="/img/sub_visual_05.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={10}
          />

          <h2 data-aos="fade-up">Directions</h2>
        </div>

        <div className="sub_content">
          <div className={style.map_intro}>
            <div className={style.inner}>
              <div className={style.contbox}>
                <h2 data-aos="fade-right">오시는 길</h2>
                <h3 data-aos="fade-right">오시는 길을 안내해 드립니다</h3>
              </div>

              <div id="map" className={style.map}></div>

              <div className={style.map_info}>
                <h4>주 소</h4>
                <div className={style.desc}>
                  <p>서울 동작구 만양로8길 69 (노량진동 222-5)</p>
                </div>

                <h4>오시는길</h4>
                <div className={style.desc}>
                  <p>노량진역 1,9호선에서 5분거리. 삼익 수협 마트바로 뒤.</p>
                  <br />
                  <p>
                    <b>＊버스노선</b>
                  </p>
                  <p>
                    <Badge bg="primary">일반</Badge> 100, 200, 300
                  </p>
                  <p>
                    <Badge bg="success">좌석</Badge> 1000, 2022
                  </p>
                  <p className={style.btn_wrap}>
                    <a
                      href="https://naver.me/FCbMBS32"
                      className="btn_basic2"
                      target="_blank"
                    >
                      네이버 지도 보기
                      <i className="icon-right-arrow">바로가기</i>
                    </a>

                    <a
                      href="https://maps.app.goo.gl/snPBA7TkFXe9s2Ux7"
                      className="btn_basic2"
                      target="_blank"
                    >
                      구글 지도 보기
                      <i className="icon-right-arrow">바로가기</i>
                    </a>
                  </p>
                </div>

                <h4>대표전화</h4>
                <div className={style.desc}>
                  <p>010-0000-0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
