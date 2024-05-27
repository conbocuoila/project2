// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
    
 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            src="https://hocvien.tiki.vn/wp-content/uploads/2021/08/download-1.png"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hocvien.tiki.vn/wp-content/uploads/2023/05/1-01.png"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://adsplus.vn/wp-content/uploads/2019/02/cac-buoc-dang-ky-ban-hang-tren-tiki-don-gian-va-hieu-qua-cao-0-1.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hocvien.tiki.vn/wp-content/uploads/2020/10/1-01-3.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
