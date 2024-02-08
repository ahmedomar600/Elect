// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SwiperAll4 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          984: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper Swiper4Width"
      >
        <SwiperSlide>
          <div>
            <div className="BoxImgS4">
              <img
                href="/"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/files/1@2x.png?v=1654240892"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="BoxImgS4">
              <img
                href="/"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/files/1@2x.png?v=1654240892"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="BoxImgS4">
              <img
                alt="a"
                href="/"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/files/1@2x.png?v=1654240892"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="BoxImgS4">
              <img
                href="/"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/files/1@2x.png?v=1654240892"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img
                href="/"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/files/1@2x.png?v=1654240892"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperAll4;
