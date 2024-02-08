import React from "react";
import { NavLink } from "react-router-dom";
import AllPage from "../comp/AllPage";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/RegisterSlice";
const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data);

    if (data.password.length < 6) {
      alert("password must be longer than or equal to 6 characters");
      return;
    } else if (data.password !== data.passwordConfirm) {
      alert("Password mismatch");
      return;
    } else dispatch(registerUser(data));
    navigate("/account/login");
  };

  // useEffect(() => {
  //   // redirect user to login page if registration was successful
  //   if (success) navigate('/account/login')
  //   // redirect authenticated user to profile screen
  //   if (userInfo) navigate('/user-profile')
  // }, [navigate, userInfo, success])

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
          <form className="FormLogin" onSubmit={handleSubmit(submitForm)}>
            <h3>Create account</h3>
            {/* <input
              placeholder="First name"
              {...register("firstName")}
              required
            /> */}
            <input placeholder="username" {...register("name")} required />

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
            <input
              placeholder="Confirm Password"
              type="password"
              {...register("passwordConfirm")}
              required
            />
            <input
              placeholder="phone"
              type="number"
              {...register("phone")}
              required
            />
            <button type="submit">Create account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
