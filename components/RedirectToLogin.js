import React from "react";
import "./redirectToLogin.css"

const RedirectToLogin = ({ config: { loginLink } }) => (
  <div className="redirect-login-card">
    <div className="redirect-login-title">Experience the ultimate scramble thrill! Unleash your full gaming potential by logging in and let the adventure begin!</div>
    <a href={loginLink} className="redirect-btn-login">Login</a>
  </div>
);

export default RedirectToLogin;
