import React, { useEffect } from "react";
import API from "../adapters/API";
import { Redirect } from "@reach/router";

function Callback(props) {

  let setToken = () => {
    let url = props.location.href;
    debugger
    let code = url.substring(
      url.lastIndexOf("code=") + 5,
      url.lastIndexOf("&")
      );
      console.log(code)
    API.getUserToken(code).then(resp => {
      debugger
      localStorage.setItem("r_token", resp.refresh_token);
    });
  };

  useEffect(() => setToken(), []);

  return <Redirect noThrow to="/home" />;
}
export default Callback;
