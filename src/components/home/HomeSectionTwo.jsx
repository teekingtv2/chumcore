import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import "animate.css";

const HomeSectionTwo = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-full mx-auto py-20 items-center px-5 md:px-0 relative">
        {/* <img
          src="/assets/images/home/Hero_section.webp"
          alt=""
          className="w-full max-h-[800px]"
        /> */}
        {/* <div className="absolute bg-[#3BB6B3] text-white py-3 lg:py-10 px-6 lg:px-16 flex justify-center items-center top-[40%] md:top-[45%] left-6 lg:left-[28%]"> */}
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__slower animate__animated animate__zoomInDown"
                  : ""
              }
            >
              <img
                src="/assets/images/home/Hero_section.webp"
                alt=""
                className="w-full max-h-[900px] lg:max-h-[800px]"
              />
              {/* <h1 className="text-[16px] lg:text-[40px]">
                  John says this cafe has the best latte!
                </h1> */}
            </div>
          )}
        </TrackVisibility>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomeSectionTwo;
