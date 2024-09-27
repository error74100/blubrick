'use client';

import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="not-found">
      <div className="inner">
        <p className="img">
          <img src="/img/icon-404-error.png" alt="404 Not Found Page" />
        </p>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p className="desc">
          주소가 잘못 입력되었거나,변경 혹은 삭제되어 요청하신 페이지를 찾을 수
          없습니다.
          <br />
          입력하신 주소가 정확한지 다시 한번 확인해 주세요.
        </p>
        <p className="btn_wrap">
          <Button
            variant="primary"
            onClick={() => {
              router.push('/');
            }}
          >
            메인페이지로 이동
          </Button>
        </p>
      </div>
    </div>
  );
}
