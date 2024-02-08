import React from "react";
import AllPage from "../comp/AllPage";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
  return (
    <>
      {/*  all pages  */}
      <AllPage />
      {/* end all pages  */}
      <div className="d-flex ps-4 pe-4 justify-content-between">
        <div>Wishlist</div>
        <div>
          <NavLink className="text-dark" to="/">
            Home
          </NavLink>
        </div>
      </div>
      <div>
        <div className="Catalog  row">
          <div className="CatalogCard">
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
          </div>

          <div className="CatalogCard ">
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
          </div>

          <div className="CatalogCard ">
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
          </div>

          <div className="CatalogCard ">
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
          </div>

          <div className="CatalogCard ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
