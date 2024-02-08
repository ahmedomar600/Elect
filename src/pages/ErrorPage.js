import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";


const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
return (
  <>
    <h1>Error 404</h1>
    <p>{error.statusText}</p>
    <p>{error.message}</p>
    <button onClick={() => navigate("/", { replace: true })}>go back</button>
  </>
 );
}

export default ErrorPage;