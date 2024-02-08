import React, { useEffect, useState } from "react";
import AllPage from "../comp/AllPage";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../store/createSlice";
import { removeItemFromCart } from "../store/createSlice";
import { delToCart } from "../store/createSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { carts, cartitem ,ahmed,loading} = useSelector((state) => state.posts);
  
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
// console.log("loading",loading);

  
  return (
    <>
      {/*  all pages  */}
      <AllPage />
      {/* end all pages  */}
      <div className="d-flex ps-4 pe-4 justify-content-between">
        <div>Your Shopping Cart</div>
        <div>
          <NavLink className="text-dark" to="/">
            Home
          </NavLink>
        </div>
      </div>
      <div className="CArt">
        <table className="CartTable">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE </th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts?.data?.products?.map((product) => (
              <tr key={product.id}>
                <td className="d-flex">
                  <img
                    className="imgTable"
                    src="https://cdnprod.mafretailproxy.com/sys-master-root/h89/hd5/48939438768158/480Wx480H_610534_main.jpg"
                    alt="12"
                  />
                  <p>{product.product.title}</p>
                </td>
                <td>{product.price}$</td>
                <td>{product.count}</td>
                <td>${product.price * product.count}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => dispatch(removeItemFromCart(product._id))}
                  >
                    {loading ? "Del Loading" : "Remove"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btnContinuestore">
        <button>
          <NavLink className="text-dark" to="/home/Catalog">
            CONTINUE SHOPPING
          </NavLink>
        </button>
        <p>
          Subtotal <span>${carts?.data?.totalCartPrice}</span>
        </p>
      </div>
      <div className="btncheckout">
        <button>CHECK OUT</button>
      </div>
    </>
  );
};

export default Cart;
