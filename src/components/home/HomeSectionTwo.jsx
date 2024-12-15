import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSectionTwo = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="max-w-[1000px] mx-auto py-20 items-center px-5 md:px-0">
        <img
          src="/assets/images/home/pic1.jpg"
          alt=""
          className="dancingSlide"
        />
      </div>
    </div>
  );
};

export default HomeSectionTwo;
