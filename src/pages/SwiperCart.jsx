import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default function SwiperCart({ recordPro }) {
  console.log(recordPro);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={recordPro?.data?.images[0]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={recordPro?.data.images[1]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={recordPro?.data?.images[2]} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
