import React from "react";
import bike from "../assets/bike.svg";

const Header = () => {
  return (
    <div className="orange-header">
      <img id="bike-svg" src={bike} />

      <h1>
        <strong>STRAVIZUAL</strong>
      </h1>
    </div>
  );
};
export default Header;
