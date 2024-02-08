// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SwiperAll2 = () => {
  return (
    <>
      <Swiper
        className="Sw3All"
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          940: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div>
            <div>
              <img
                className="Swiper3Img"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1654331250"
                href="/"
              />
            </div>
            <div className="Sw3h5">
              <h5>03 Jun, 2022 </h5>
            </div>
            <div className="Swc3">
              <h1>Security Must Be Top Priority in Bringing...</h1>
              <p>
                Welcome to the digital world, where technology is constantly
                evolving and shaping the way we live, work, and communicate.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img
                className="Swiper3Img"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1654331250"
                href="/"
              />
            </div>
            <div className="Sw3h5">
              <h5>03 Jun, 2022 </h5>
            </div>
            <div className="Swc3">
              <h1>Security Must Be Top Priority in Bringing...</h1>
              <p>
                Welcome to the digital world, where technology is constantly
                evolving and shaping the way we live, work, and communicate.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img
                className="Swiper3Img"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1654331250"
                href="/"
              />
            </div>
            <div className="Sw3h5">
              <h5>03 Jun, 2022 </h5>
            </div>
            <div className="Swc3">
              <h1>Security Must Be Top Priority in Bringing...</h1>
              <p>
                Welcome to the digital world, where technology is constantly
                evolving and shaping the way we live, work, and communicate.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img
                className="Swiper3Img"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1654331250"
                href="/"
              />
            </div>
            <div className="Sw3h5">
              <h5>03 Jun, 2022 </h5>
            </div>
            <div className="Swc3">
              <h1>Security Must Be Top Priority in Bringing...</h1>
              <p>
                Welcome to the digital world, where technology is constantly
                evolving and shaping the way we live, work, and communicate.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img
                className="Swiper3Img"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1654331250"
                href="/"
              />
            </div>
            <div className="Sw3h5">
              <h5>03 Jun, 2022 </h5>
            </div>
            <div className="Swc3">
              <h1>Security Must Be Top Priority in Bringing...</h1>
              <p>
                Welcome to the digital world, where technology is constantly
                evolving and shaping the way we live, work, and communicate.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperAll2;

{
  /* 
<div>
            <div>
              <img
                src="https://electbox-codezeel.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1654331250"
                href="/"
              />
            </div>
            <div>
              <h5>03 Jun, 2022 </h5>
            </div>
            <div>
              <h1>Security Must Be Top Priority in Bringing...</h1>
              <p>
                Welcome to the digital world, where technology is constantly
                evolving and shaping the way we live, work, and communicate.
              </p>
            </div>
          </div> */
}
