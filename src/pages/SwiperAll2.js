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
        className="mySwiper"
      >
        <SwiperSlide className="slide2">
          <div className="TS2">
            <h1>Wireless Headphones</h1>
            <h5>Desktops</h5>
            <h5>Laptops/ Notebooks</h5>
            <h5>Gaming Laptops</h5>
            <h5>Shopping tools</h5>
            <h5>Accessories</h5>
          </div>
          <div className="IS2">
            <img
              src="https://electbox-codezeel.myshopify.com/cdn/shop/files/category-1_339x346.jpg?v=1654236109"
              class="d-block CardSwImg"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <div className="TS2">
            <h1>Wireless Headphones</h1>
            <h5>Desktops</h5>
            <h5>Laptops/ Notebooks</h5>
            <h5>Gaming Laptops</h5>
            <h5>Shopping tools</h5>
            <h5>Accessories</h5>
          </div>
          <div className="IS2">
            <img
              src="https://electbox-codezeel.myshopify.com/cdn/shop/files/category-2_339x346.jpg?v=1654236109"
              class="d-block CardSwImg"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <div className="TS2">
            <h1>Wireless Headphones</h1>
            <h5>Desktops</h5>
            <h5>Laptops/ Notebooks</h5>
            <h5>Gaming Laptops</h5>
            <h5>Shopping tools</h5>
            <h5>Accessories</h5>
          </div>
          <div className="IS2">
            <img
              src="https://electbox-codezeel.myshopify.com/cdn/shop/files/category-3_339x346.jpg?v=1654236109"
              class="d-block CardSwImg"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <div className="TS2">
            <h1>Wireless Headphones</h1>
            <h5>Desktops</h5>
            <h5>Laptops/ Notebooks</h5>
            <h5>Gaming Laptops</h5>
            <h5>Shopping tools</h5>
            <h5>Accessories</h5>
          </div>
          <div className="IS2">
            <img
              src="https://electbox-codezeel.myshopify.com/cdn/shop/files/category-3_339x346.jpg?v=1654236109"
              class="d-block CardSwImg"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <div className="TS2">
            <h1>Wireless Headphones</h1>
            <h5>Desktops</h5>
            <h5>Laptops/ Notebooks</h5>
            <h5>Gaming Laptops</h5>
            <h5>Shopping tools</h5>
            <h5>Accessories</h5>
          </div>
          <div className="IS2">
            <img
              src="https://electbox-codezeel.myshopify.com/cdn/shop/files/category-3_339x346.jpg?v=1654236109"
              class="d-block CardSwImg"
              alt="..."
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperAll2;
