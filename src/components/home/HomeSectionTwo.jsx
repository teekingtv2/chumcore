import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import "animate.css";

const HomeSectionTwo = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-full mx-auto py-20 items-center px-5 md:px-0 relative">
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
            </div>
          )}
        </TrackVisibility>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomeSectionTwo;
