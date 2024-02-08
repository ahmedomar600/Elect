import React from "react";
import "../styles.css";
import AllPage from "../comp/AllPage";

import SwiperAll from "./SwiperAll";
import SwiperAll2 from "./SwiperAll2";
import SwiperAll3 from "./SwiperAll3";
import SwiperAll4 from "./SwiperAll4";
import SwiperAll5 from "./SwiperAll5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-regular";
const Home = () => {
  return (
    <>
      {/*  all pages  */}
      <AllPage />
      {/* end all pages  */}

      <div className="ps-4 pe-4">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                className="w-100"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/files/main-banner-2_1076x500.jpg?v=1654170706;"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                className="w-100"
                src="https://electbox-codezeel.myshopify.com/cdn/shop/files/main-banner-1_1076x500.jpg?v=1654170706;"
              ></img>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* start cards 2   */}
      <div class="Card">
        <div className="CardOne">
          <div className="CardImg">
            <img
              src="https://electbox-codezeel.myshopify.com/cdn/shop/files/sub-banner-1.jpg?v=1654227933"
              alt="."
            />
          </div>
          <div className="textCardOne">
            <p className="m-0">Extra 30% Off</p>
            <p className="m-0">
              Prolet Designed
              <br />
              For AirPods
            </p>
            <a href="/" class=" text-decoration-underline text-black">
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="CardTwo"></div>
        <div className="CardImg">
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/files/sub-banner-2.jpg?v=1654227932"
            alt=".."
          />
        </div>
        <div className="textCardTwo">
          <p className="m-0">Extra 30% Off</p>
          <p className="m-0">
            EasySkinz XBOX
            <br />
            Series X
          </p>
          <a href="/" class=" text-decoration-underline text-black">
            SHOP NOW
          </a>
        </div>
      </div>
      {/* end cards 2   */}

      {/*  swiper js 1  */}
      <h3 className="prodect">Popular Products</h3>
      <SwiperAll />
      {/* end swiper  1 */}
      {/* card cam   */}
      <div className="CardCam">
        <img
          src="https://electbox-codezeel.myshopify.com/cdn/shop/files/offer-banner-1.jpg?v=1654234571"
          alt="..."
        />
        <div className="CardCamIn">
          <h5>Exclusively High Quality Products</h5>
          <p>Nikon Normal 55mm f/1.2 Manual Focus Lens</p>
        </div>
      </div>
      {/* end cam   */}
      {/*  swiper js 2  */}
      <h3 className="prodect">Latest Products</h3>
      <SwiperAll />
      {/* end swiper  2 */}
      {/*  swiper js ALL 1  */}
      <h3 className="prodect">Shop By Category</h3>
      <SwiperAll2 />
      {/* end swiper js ALl 2 */}

      {/* start cards 2  over  */}
      <div class="Card">
        <div className="CardOne">
          <div className="CardImg">
            <img
              src="https://electbox-codezeel.myshopify.com/cdn/shop/files/cms-banner-1.jpg?v=1654238339"
              alt="..."
            />
          </div>
          <div className="textCardOne">
            <p className="m-0">pecial Offers</p>
            <p className="m-0">
              Polaroid Camera
              <br />
              Blue & White
            </p>
            <a href="/" class=" text-decoration-underline text-black">
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="CardTwo"></div>
        <div className="CardImg">
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/files/cms-banner-2.jpg?v=1654238339"
            alt="..."
          />
        </div>
        <div className="textCardTwo">
          <p className="m-0">Extra 30% Off</p>
          <p className="m-0">
            Smart Speaker
            <br />& Assistant
          </p>
          <a href="/" class="text-decoration-underline text-light">
            SHOP NOW
          </a>
        </div>
      </div>
      {/*  cards 2   */}
      {/*  Swiper all 1  */}
      <h3 className="prodect">Featured Product</h3>
      <SwiperAll />
      {/*  Swiper all 1  */}
      {/*  Swiper all 3  */}
      <h3 className="prodect">From Our Blog</h3>
      <SwiperAll3 />
      {/*  Swiper all 3  */}
      {/*  Swiper all 4 */}
      <SwiperAll4 />
      {/*  Swiper all 4  */}
      {/*  companey  */}
      <div className="compeny">
        <div className="compenyImg">
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/files/about-img_240x.jpg?v=1654175142"
            alt="a"
            href="/"
          />
        </div>
        <div className="compenyCard">
          <h4>Awesome Experience With Our Company</h4>
          <p>Sandperch flyingfish yellowf horsefish bullhead</p>
          <p>Walleye poolfish sand go spanish mackerel</p>
          <button className="btn">READ MORE</button>
        </div>
      </div>
      {/*  compeny  */}
      {/*  services  */}
      <div className="services">
        <div>
          <div className="servicesO">
            <div>
              <FontAwesomeIcon className="ico" icon={faUser} />
            </div>
            <div className="servicesC">
              <h2>Fast Delivery</h2>
              <p>Our Fast Delivery Service</p>
            </div>
          </div>
        </div>
        <div>
          <div className="servicesO">
            <div>
              <FontAwesomeIcon className="ico" icon={faUser} />
            </div>
            <div className="servicesC">
              <h2>24/7 Call Support</h2>
              <p>Our Fast Delivery Service</p>
            </div>
          </div>
        </div>
        <div>
          <div className="servicesO">
            <div>
              <FontAwesomeIcon className="ico" icon={faUser} />
            </div>
            <div className="servicesC">
              <h2>Quality Products</h2>
              <p>Our Fast Delivery Service</p>
            </div>
          </div>
        </div>
        <div>
          <div className="servicesO">
            <div>
              <FontAwesomeIcon className="ico" icon={faUser} />
            </div>
            <div className="servicesC">
              <h2>Up To 20% Off</h2>
              <p>Our Fast Delivery Service</p>
            </div>
          </div>
        </div>
        <div>
          <div className="servicesO">
            <div>
              <FontAwesomeIcon className="ico" icon={faUser} />
            </div>
            <div className="servicesC">
              <h2>Best Satisfaction</h2>
              <p>Our Fast Delivery Service</p>
            </div>
          </div>
        </div>
      </div>
      {/*  services  */}
      {/*  client  */}
      <div className="">
        <div className="client">
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/files/left-banner-1_large.jpg?v=1654235736"
            alt="a"
          />
          <SwiperAll5 />
        </div>
      </div>
      {/*  client  */}
    </>
  );
};

export default Home;

/*
 <div class="Card">
        <div className="CardOne">
          <div className="CardImg">
          <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/files/cms-banner-1.jpg?v=1654238339"
            alt="..."
          />
          </div>
          <div className="textCardOne">
            <p className="m-0">pecial Offers</p>
            <p className="m-0">
              Polaroid Camera
              <br />
              Blue & White
            </p>
            <a href="/" class=" text-decoration-underline text-black">
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="CardTwo"></div>
        <div className="CardImg">
        <img
            src="https://electbox-codezeel.myshopify.com/cdn/shop/files/cms-banner-2.jpg?v=1654238339"
            alt="..."
          />
        </div>
        <div className="textCardTwo">
          <p className="m-0">Extra 30% Off</p>
          <p className="m-0">
            Smart Speaker
              <br />& Assistant
          </p>
          <a href="/" class="text-decoration-underline text-light">
              SHOP NOW
            </a>
        </div>
      </div>
*/
