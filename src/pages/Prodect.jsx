import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SwiperCart from "./SwiperCart";
import SwiperAll from "./SwiperAll";
import AllPage from "../comp/AllPage";
// import for one produect page
import { fetchProdct } from "../store/createSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Prodect = () => {
  const [Cartwish, setCartwish] = useState(false);
  const [Cartwish1, setCartwish1] = useState(false);
  const [Cartwish2, setCartwish2] = useState(false);
  const [Cartwish3, setCartwish3] = useState(false);
  console.log(Cartwish);
  // for get product
  const dispatch = useDispatch();
  const { id } = useParams();
  const { recordPro } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchProdct(id));
  }, [dispatch, id]);

  console.log(recordPro);

  return (
    <>
      {/*  all pages  */}
      <AllPage className="m-0" />
      {/* end all pages  */}
      <div className="ProdectCart">
        <div className="SwiperCart">
          <SwiperCart recordPro={recordPro} />
        </div>
        <div className="descProdact">
          <h5>{recordPro?.data?.title}</h5>
          <div className="descPrice">
            ${recordPro?.data?.price}
            <span>$120.00</span>
          </div>
          <p>{recordPro?.data?.description}</p>

          <div className="info">
            <div>Type :{recordPro?.data?.category}</div>
            <div>Vendor :Samsung</div>
            <div>Sku :NHFL5-6</div>
            <div>Availability:In Stock</div>
            <div>Tags :Back light</div>
          </div>
          <div className="infoBtn">
            <button>ADD TO CART</button>
            <button>BUY IT NOW</button>
          </div>
          <div className="ToOpenWidth">
            <div></div>
            <h1
              onClick={() => {
                setCartwish(!Cartwish);
              }}
            >
              SHIPPING & RETURNS
            </h1>
            <p className={Cartwish ? "ToCartWidth" : "sss"}>
              Free shipping and returns available on all orders! We ship all US
              domestic orders within 5-10 business days!
            </p>
            <div></div>
            <h1
              onClick={() => {
                setCartwish1(!Cartwish1);
              }}
            >
              SIZE CHART
            </h1>
            <p className={Cartwish1 ? "ToCartWidth" : "sss"}>
              Free shipping and returns available on all orders! We ship all US
              domestic orders within 5-10 business days!
            </p>
            <div></div>
            <h1
              onClick={() => {
                setCartwish2(!Cartwish2);
              }}
            >
              CARE INSTRUCTIONS
            </h1>
            <p className={Cartwish2 ? "ToCartWidth" : "sss"}>
              Use a soft damp cloth and a drop of mild soap to remove any haze.
              Air dry.
            </p>
            <div></div>
            <h1
              onClick={() => {
                setCartwish3(!Cartwish3);
              }}
            >
              SHARE
            </h1>
            <p className={Cartwish3 ? "ToCartWidth" : "sss"}>
              https://electbox-codezeel.myshopify.com/products/copy-of-agittis-iman-mohamed-abdulmajid
            </p>
          </div>
        </div>
      </div>
      <div className="TabDesc">
        <Tabs>
          <TabList>
            <Tab>DESCRIPTION</Tab>
            <Tab>REVIEWS</Tab>
          </TabList>
          <TabPanel>
            <div className="DESCRIPTION">
              <h6>{recordPro?.data?.description}</h6>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="reviews">
              <div className="buildRev">
                <h3>Customer Reviews</h3>
                <p> Based on 1 review</p>
                <button>Write a review</button>
              </div>
              <div className="reviewsComment">
                <h4>Good quality product</h4>
                <h3>Antonio Accusantium on Jun 07, 2022</h3>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est omnis dolor
                  repellendus.
                </p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/*  Swiper all 1  */}
      <h3 className="prodect">You May Also Like</h3>
      <SwiperAll />
      {/*  Swiper all 1  */}
      <div className="m-4">
        <h1>powerd by Ahmed goda</h1>
      </div>
    </>
  );
};

export default Prodect;
