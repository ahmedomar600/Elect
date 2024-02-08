import React from "react";
import { NavLink } from "react-router-dom";
import AllPage from "../comp/AllPage";

const RestPassword = () => {
  return (
    <>
      {/*  all pages  */}
      <AllPage />
      {/* end all pages  */}
      <div className="d-flex ps-4 pe-4 justify-content-between">
        <div>Create Account</div>
        <div>
          <NavLink className="text-dark m-1 " to="/">
            Home
          </NavLink>
          |
          <NavLink className="text-dark ms-1" to="/account/login">
            Login
          </NavLink>
        </div>
      </div>
      {/* start register*/}
      <div className="Register">
        <div className="CreateRegister">
          <h3>Reset your password</h3>
          <p>We will send you an email to reset your password</p>

          <input placeholder="Email" />

          <button>Submit</button>
          <NavLink className="text-dark mt-2" to="/account/login">
            Back to login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RestPassword;
