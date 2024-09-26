'use client';

import 'aos/dist/aos.css';
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
        <h2 data-aos="fade-up">environment</h2>
      </div>
      <div className="sub_content">environment ...</div>
    </div>
  );
}
