import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AllPage from "../comp/AllPage";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/createSlice";
import { postcart } from "../store/createSlice";
// import { addToCart } from "../store/createSlice";
const Catalog = () => {
  const [showFilter, setshowFilter] = useState(false);
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);
  const [show5, setshow5] = useState(false);
  const { record } = useSelector((state) => state.posts);
  // console.log(record.data[1].description);?
  // console.log(record.length);
  // console.log(record.data[1].id);
  // productId= record.data[1].id
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  // console.log(record?.data?);

  return (
    <>
      {/*  all pages  */}
      <AllPage />
      {/* end all pages  */}

      <div className="CatalogFilter">
        <div>
          <button
            className="mainFilterbtn"
            onClick={() => setshowFilter(!showFilter)}
          >
            FILTER AND SORT
          </button>
        </div>
        <div
          className={showFilter ? "open  leftFilter" : "leftFilter"}
          // style={{ width: showFilter ? "opne" : "" }}
        >
          <button
            className="CloseFilter"
            style={{ display: showFilter ? "block" : "none" }}
            onClick={() => setshowFilter(!showFilter)}
          >
            x
          </button>
          <div
            className="listFilter"
            style={{ display: showFilter ? "flex" : "none" }}
          >
            <div className="itemFilter">
              {/* start one div left width */}
              <a onClick={() => setshow(!show)}>
                <h4>Availability</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <div
                className={show ? "open  leftFilter" : "leftFilter"}
                // style={{ width: showFilter ? "opne" : "" }}
              >
                <button
                  className="CloseFilter"
                  style={{ display: show ? "block" : "none" }}
                  onClick={() => setshow(!show)}
                >
                  x
                </button>
                <div style={{ display: show ? "block" : "none" }}>
                  <button onClick={() => setshow(!show)}>
                    <FontAwesomeIcon icon={faArrowRight} /> Availability
                  </button>
                  <div>
                    <input type="checkbox"></input>
                    In stock (18)
                  </div>
                  <div>
                    <input type="checkbox"></input>
                    Out of stock (1)
                  </div>
                </div>
              </div>
            </div>
            <div className="itemFilter">
              {/* start two div left width */}
              <a onClick={() => setshow2(!show2)}>
                <h4>Price</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <div
                className={show2 ? "open  leftFilter" : "leftFilter"}
                // style={{ width: showFilter ? "opne" : "" }}
              >
                <button
                  className="CloseFilter"
                  style={{ display: show2 ? "block" : "none" }}
                  onClick={() => setshow2(!show2)}
                >
                  x
                </button>
                <div style={{ display: show2 ? "block" : "none" }}>price</div>
              </div>
            </div>
            <div className="itemFilter">
              {/* start div left width */}
              <a onClick={() => setshow3(!show3)}>
                <h4>Brand</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <div
                className={show3 ? "open  leftFilter" : "leftFilter"}
                // style={{ width: showFilter ? "opne" : "" }}
              >
                <button
                  className="CloseFilter"
                  style={{ display: show3 ? "block" : "none" }}
                  onClick={() => setshow3(!show3)}
                >
                  x
                </button>
                <div style={{ display: show3 ? "block" : "none" }}></div>
              </div>
            </div>
            <div className="itemFilter">
              {/* start div left width */}
              <a onClick={() => setshow4(!show4)}>
                <h4>Color</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <div
                className={show4 ? "open  leftFilter" : "leftFilter"}
                // style={{ width: showFilter ? "opne" : "" }}
              >
                <button
                  className="CloseFilter"
                  style={{ display: show4 ? "block" : "none" }}
                  onClick={() => setshow4(!show4)}
                >
                  x
                </button>
                <div style={{ display: show4 ? "block" : "none" }}></div>
              </div>
            </div>
            <div className="itemFilter">
              {" "}
              {/* start div left width */}
              <a onClick={() => setshow5(!show5)}>
                <h4>Size</h4>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <div
                className={show5 ? "open  leftFilter" : "leftFilter"}
                // style={{ width: showFilter ? "opne" : "" }}
              >
                <button
                  className="CloseFilter"
                  style={{ display: show5 ? "block" : "none" }}
                  onClick={() => setshow5(!show5)}
                >
                  x
                </button>
                <div style={{ display: show5 ? "block" : "none" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="me-1">{record?.data?.length}</span>products
        </div>
      </div>

      <div>
        <div className="Catalog row">
          {record?.data.map((product) => (
            <div
              key={product.id}
              className="CatalogCard"
            >
              <NavLink to={`/Prodect/${product.id}`}>
                <img
                  src="https://cdnprod.mafretailproxy.com/sys-master-root/h89/hd5/48939438768158/480Wx480H_610534_main.jpg"
                  class="d-block CardSwImgCatlog"
                  alt="..."
                />
              </NavLink>
              <div className="CardSw">
                <div className="discount">-{25}%</div>
                <p>{product.title}</p>

                <span>${product.price}</span>
                <br />
                <button
                  onClick={() => dispatch(postcart(product.id.toString()))}
                  className="btn"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Catalog;
