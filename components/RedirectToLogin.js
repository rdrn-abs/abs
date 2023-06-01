import React from "react";
import "./redirectToLogin.css";

const RedirectToLogin = ({ link }) => (
  <div className="container">
    <div className="title">Login to play game</div>
    <a href={link}>
      <button className="button">Login</button>
    </a>
  </div>
);

export default RedirectToLogin;
