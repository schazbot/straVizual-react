import React from "react";
import Header from "../components/Header";
function Login() {
  const OAUTH_LINK =
    "https://www.strava.com/oauth/authorize?client_id=42658&response_type=code&redirect_uri=http://localhost:3000/callback&approval_prompt=force&scope=read,activity:read&approval_prompt=force";

  const stravaLogin = () => {
    window.location.assign(OAUTH_LINK);
  };

  return (
    <div>
      <Header />
      <button className="login-button" onClick={stravaLogin}>
        Login
      </button>
    </div>
  );
}
export default Login;
