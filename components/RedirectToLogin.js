import React from "react";
import "./redirectToLogin.css";

const RedirectToLogin = ({ config: { loginLink } }) => {
  return (
    <div>
      <div>Login to play game</div>
      <a href={loginLink}>
        <button>Login</button>
      </a>
    </div>
  );
};

export default RedirectToLogin;
