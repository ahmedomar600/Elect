import React, { useEffect } from "react";
import AllPage from "../comp/AllPage";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../store/createSlice";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log("userinfo", userInfo);

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
    </>
  );
};

export default Profile;
