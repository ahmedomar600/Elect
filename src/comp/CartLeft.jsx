import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faDeleteLeft
} from "@fortawesome/free-solid-svg-icons";
import { fetchCartItems } from "../store/createSlice";
import {  useSelector,useDispatch } from "react-redux";
import { removeItemFromCart } from "../store/createSlice";

const CartLeft = ({cart,setcart}) => {
  const { carts, cartitem ,ahmed,loading} = useSelector((state) => state.posts);
 
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(fetchCartItems());
}, [dispatch]);
console.log(carts);

   return (
    <div className="cartdivleft">
    <div className={cart ? "RightCart open" : "RightCart"}>
      <div className="firstsec">
        <h4>Your Shopping Cart</h4>
        <button
          className="CloseFilter"
          style={{ display: cart ? "block" : "none" }}
          onClick={() => setcart(!cart)}
        >
          x
        </button>
      </div>
      <div className="seccart2">
       {carts?.data?.products?.map((product) => (
        <>
         <div className="secondcart"  key={product.id}>
          <img src="https://electbox-codezeel.myshopify.com/cdn/shop/products/5_82ddb34e-b08c-4646-9419-e6a19f50c3bf_1144x1000.jpg?v=1654520990" />
          <p>{product.product.title}</p>
          <button>
            <FontAwesomeIcon className="icon-mg2 " icon={faDeleteLeft} onClick={() => dispatch(removeItemFromCart(product._id))} />
          </button>
        </div>
        </>
       ))}
       
      </div>
      <div className="sec3cart">
        <div className="sec1">
          <h6>Total Item</h6>
          <h6>Subtotal</h6>
        </div>
        <div className="sec2">
          <h6>{carts?.numOfCartItems}</h6>
          <h6>${carts?.data?.totalCartPrice}</h6>
        </div>
        <div className="cartBtns">
          <button>
            <NavLink className="text-white" to="Cart">
              VIEW CART
            </NavLink>
          </button>
          <button>CHECK OUT</button>
        </div>
      </div>
    </div>
  </div>
   )

}
export default CartLeft;

