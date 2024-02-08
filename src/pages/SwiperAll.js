// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faArrowsRotate,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/fontawesome-free-regular";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SwiperAll = () => {
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
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="PopSwiper">
          <div className="IconProduct">
            <div className="icon1 ">
              <FontAwesomeIcon className="icon-mg2 " icon={faHeart} />
            </div>
            <div className="icon2">
              <FontAwesomeIcon className="icon-mg2 " icon={faHeart} />
            </div>
            <div className="icon3">
              <FontAwesomeIcon className="icon-mg2 " icon={faUser} />
            </div>
          </div>
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/products/5_82ddb34e-b08c-4646-9419-e6a19f50c3bf_1144x1000.jpg?v=1654520990"
            class="d-block CardSwImg"
            alt="..."
          />
          <div className="CardSw">
            <div className="discount">-10%</div>
            <p>Beats Solo3 Wireless Headphones BeatsBeats</p>
            <span>$17.00</span>
            <br />
            <button className="btn ">ADD TO CART</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="PopSwiper">
          <div className="IconProduct">
            <div className="icon1 ">
              <FontAwesomeIcon className="icon-mg2 " icon={faHeart} />
            </div>
            <div className="icon2">
              <FontAwesomeIcon className="icon-mg2 " icon={faHeart} />
            </div>
            <div className="icon3">
              <FontAwesomeIcon className="icon-mg2 " icon={faUser} />
            </div>
          </div>
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/products/5_82ddb34e-b08c-4646-9419-e6a19f50c3bf_1144x1000.jpg?v=1654520990"
            class="d-block CardSwImg"
            alt="..."
          />
          <div className="CardSw">
            <div className="discount">-10%</div>
            <p>Beats Solo3 Wireless Headphones BeatsBeats</p>
            <span>$17.00</span>
            <br />
            <button className="btn ">ADD TO CART</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="PopSwiper">
          <div className="IconProduct">
            <div className="icon1 ">
              <FontAwesomeIcon className="icon-mg2 " icon={faHeart} />
            </div>
            <div className="icon2">
              <FontAwesomeIcon className="icon-mg2 " icon={faHeart} />
            </div>
            <div className="icon3">
              <FontAwesomeIcon className="icon-mg2 " icon={faUser} />
            </div>
          </div>
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/products/5_82ddb34e-b08c-4646-9419-e6a19f50c3bf_1144x1000.jpg?v=1654520990"
            class="d-block CardSwImg"
            alt="..."
          />
          <div className="CardSw">
            <div className="discount">-10%</div>
            <span className="discount"></span>
            <p>Beats Solo3 Wireless Headphones BeatsBeats</p>
            <span className="price">$17.00</span>
            <br />
            <button className="btn ">ADD TO CART</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="PopSwiper">
          <div className="IconProduct">
            <div className="icon1 ">
              <FontAwesomeIcon className="icon-mg2 " icon={faHeart} />
            </div>
            <div className="icon2">
              <FontAwesomeIcon className="icon-mg2 " icon={faHeart} />
            </div>
            <div className="icon3">
              <FontAwesomeIcon className="icon-mg2 " icon={faUser} />
            </div>
          </div>
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/products/5_82ddb34e-b08c-4646-9419-e6a19f50c3bf_1144x1000.jpg?v=1654520990"
            class="d-block CardSwImg"
            alt="..."
          />
          <div className="CardSw">
            <div className="discount">-10%</div>
            <span className="discount"></span>
            <p>Beats Solo3 Wireless Headphones BeatsBeats</p>
            <span className="price">$17.00</span>
            <br />
            <button className="btn ">ADD TO CART</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="PopSwiper">
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/products/5_82ddb34e-b08c-4646-9419-e6a19f50c3bf_1144x1000.jpg?v=1654520990"
            class="d-block CardSwImg"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperAll;
