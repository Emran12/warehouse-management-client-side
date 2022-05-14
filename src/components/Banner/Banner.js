import React from "react";
import banner from "../Banner/landing_slide-bg.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} height="450px" className="w-100" alt="" />
      <div className="centered text-white">
        <h1 className="mb-5">Medicor</h1>
        <h2>Pharmacy Warehouse</h2>
      </div>
    </div>
  );
};

export default Banner;
