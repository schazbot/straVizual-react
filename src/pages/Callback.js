import React, { useEffect } from "react";
import API from "../adapters/API";
import { Redirect } from "@reach/router";

function Callback(props) {

  let setToken = () => {
    let url = props.location.href;
    let code = url.substring(
      url.lastIndexOf("code=") + 5,
      url.lastIndexOf("&")
      );
      // console.log(code)
    API.getUserToken(code).then(resp => {
      // console.log(resp)
      localStorage.setItem("code", code)
      localStorage.setItem("r_token", resp.refresh_token);
      localStorage.setItem("access_token", resp.access_token);
    });
  };

  useEffect(() => setToken(), []);

  return <Redirect noThrow to="/home" />;
}
export default Callback;
