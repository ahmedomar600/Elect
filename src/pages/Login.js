import React from "react";
import { NavLink } from "react-router-dom";
import AllPage from "../comp/AllPage";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/RegisterSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userToken, userInfo, errors, success } = useSelector(
    (state) => state.auth
  );

  const submitForm = (data) => {
    if (data.password.length < 6) {
      alert("password must be longer than or equal to 6 characters");
      return;
    }
    dispatch(loginUser(data))
      .unwrap()
      .then((response) => {
        if (response.error) {
          alert("Email or Password is not correct");
        } else {
          navigate("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        alert("An error occurred while logging in: " + error.message);
      });
  };
  return (
    <>
      {/*  all pages  */}
      <AllPage />
      {/* end all pages  */}
      <div className="d-flex ps-4 pe-4 justify-content-between">
        <div>Account</div>
        <div>
          <NavLink className="text-dark" to="/">
            Home
          </NavLink>
        </div>
      </div>
      {/* start login*/}
      <div className="UserLogin">
        <div className="Login">
          <form className="FormLogin" onSubmit={handleSubmit(submitForm)}>
            <h3>Login</h3>
            <input
              placeholder="Email"
              type="email"
              {...register("email")}
              required
            />
            <input
              placeholder="Password"
              type="password"
              {...register("password")}
              required
            />
            <NavLink to="/RestPassword">Forgot your password?</NavLink>
            <div className="EventUser">
              <button tybe="submit">login</button>
              <button>
                <NavLink to="/account/register">CREATE ACCOUNT</NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
