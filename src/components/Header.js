import React from "react";
import bike from "../assets/bike.svg";

const Header = () => {
  return (
    <nav className="orange-header">
      <img alt="a racing bicyle"id="bike-svg" src={bike}/>

      <h1>
        <strong>STRAVIZUAL</strong>
      </h1>
    </nav>
  );
};
export default Header;
