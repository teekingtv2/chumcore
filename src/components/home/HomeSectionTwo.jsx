import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import "animate.css";

const HomeSectionTwo = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-full mx-auto py-20 items-center px-5 md:px-0 relative">
        <img
          src="/assets/images/home/pic1.jpg"
          alt=""
          className="w-full max-h-[800px]"
        />
        <div className="absolute bg-[#3BB6B3] text-white py-10 px-16 flex justify-center items-center top-[45%] left-[28%]">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__slower animate__animated animate__zoomInDown"
                    : ""
                }
              >
                <h1 className="text-[40px]">
                  John says this cafe has the best latte!
                </h1>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
