import React from "react";
import "./redirectToLogin.css";

const RedirectToLogin = ({ config:{loginLink} }) => (
  <div className="container">
    <div className="title">Login to play game</div>
    <a href={loginLink}>
      <button className="button">Login</button>
    </a>
  </div>
);

export default RedirectToLogin;
