// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SwiperAll5 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        // breakpoints={{
        //   500: {
        //     slidesPerView: 2,
        //     spaceBetween: 10
        //   },
        //   640: {
        //     slidesPerView: 3,
        //     spaceBetween: 10
        //   },
        //   984: {
        //     slidesPerView: 4,
        //     spaceBetween: 10
        //   }
        // }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper ClientSw"
      >
        <SwiperSlide className="SlideClient">
          <div className="CardClient">
            <h2>Our Client Say’s</h2>
            <img
              src="https://electbox-codezeel.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1654331250"
              alt="a"
            />
            <p>
              Contrary to popular belief, Ipsum is not smply random roots in a
              piece dummy tex Ipsum is not smply dummy ipsum loream.
            </p>
            <h3>Mr. Dummy</h3>
            <p>Manager</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="PopSwiper"></SwiperSlide>
        <SwiperSlide className="PopSwiper"></SwiperSlide>
        <SwiperSlide className="PopSwiper"></SwiperSlide>
        <SwiperSlide className="PopSwiper"></SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperAll5;
