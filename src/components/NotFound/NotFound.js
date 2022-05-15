import React from "react";
import img from "./404.png";
const NotFound = () => {
  return (
    <div className=" container d-flex-cols text-center mt-5">
      <img src={img} alt="" />
      <p className="font-bold fs-2 font-serif mt-2 ">404-PAGE NOT FOUND</p>
      <p className="fs-3 font-serif mt-2">
        The page you are looking for might have been removed had its name
        changed or temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFound;
