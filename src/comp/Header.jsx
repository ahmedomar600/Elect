import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/RegisterSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faArrowsRotate,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/fontawesome-free-regular";
import CartLeft from "./CartLeft"
const Header = () => {
  const [cart, setcart] = useState(false);
  const dispatch = useDispatch();
  const { loading, userToken, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const logOut = () => {
    // localStorage.removeItem("userToken");
    dispatch(logout());
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <div className="Ahmed">
        Powerd BY : Webix Call Me Now
        <span>
          <a className="shop" href="/">
            -Shop now
          </a>
        </span>
        <button className={userToken ? "" : "d-none"} onClick={logOut}>
          {userToken ? "logout" : ""}
        </button>
      </div>

      <div className="containers ">
        <div className="HeaderCen">
          <h1 className="white">Elegance Store</h1>
        </div>
        <div className="HeaderCen">
          <ul>
            <li>
              <NavLink to="/">
                <div className="ICON">
                  <FontAwesomeIcon
                    className="icon-mg1 white"
                    icon={faMagnifyingGlass}
                  />
                </div>
                <div>Search</div>
              </NavLink>
            </li>
            <li>
              <NavLink to={userToken ? "home/Profile" : "/account/login"}>
                <div className="ICON">
                  <FontAwesomeIcon className="icon-mg2 white" icon={faUser} />
                </div>
                <div>{userToken ? "My Account" : "login"}</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="home/Wishlist">
                <div className="ICON">
                  <FontAwesomeIcon className="icon-mg2 white" icon={faUser} />
                </div>
                <div>Wishlist</div>
              </NavLink>
            </li>
            <li>
              <a
                onClick={() => {
                  setcart(!cart);
                }}
              >
                <div className="ICON">
                  <FontAwesomeIcon
                    className="icon-mg4 white"
                    icon={faArrowsRotate}
                  />
                </div>
                <div>Re Cart</div>
              </a>
            </li>
            <li>
              <li>
                <NavLink to="Cart">
                  <div className="ICON">
                    <FontAwesomeIcon
                      className="icon-mg5 white"
                      icon={faCartShopping}
                    />
                  </div>
                  <div>My Cart</div>
                </NavLink>
              </li>
            </li>
          </ul>
        </div>
      </div>

      <div className="navx">
        <ul className="nav nav-tabs background">
          <li className="nav-item">
            <NavLink className="nav-link white  " to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link white" to="home/Catalog">
              CATALOG
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link white" to="home/Contact">
              CONTACT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link white " to="/">
              OFFERS
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <div class="dropdown">
              <button
                class="btn btn-dark  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MORE
              </button>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="burger">
          <a
            class="btn "
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <FontAwesomeIcon className="BurIcon" icon={faList} />
          </a>

          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title text-dark" id="offcanvasExampleLabel">
                list menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div className="listMenu">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="home/Catalog">CATALOG</NavLink>
                <NavLink to="home/Contact">CONTACT</NavLink>
                <NavLink to="/">OFFERS</NavLink>
                <NavLink to="/">MORE</NavLink>
              </div>
              <div className="text-dark">Powerd BY Ahmed Goda</div>
            </div>
          </div>
        </div>
        <a className="Need" href="/">
          Need Help? (Call Webix Now)
        </a>
      </div>
        <CartLeft cart={cart} setcart={setcart}/>
    </>
  );
};

export default Header;
