import React from "react";
import "./redirectToLogin.css"

const RedirectToLogin = ({ config: { loginLink } }) => (
  <div className="redirect-login-card">
    <div className="redirect-login-title">Login to play game</div>
    <a href={loginLink} className="redirect-btn-login">Login</a>
  </div>
);

export default RedirectToLogin;
