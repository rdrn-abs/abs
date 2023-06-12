import React from "react";

const RedirectToLogin = ({ config: { loginLink } }) => (
  <div>
    <div>Login to play game</div>
    <a href={loginLink}>Login</a>
  </div>
);

export default RedirectToLogin;
