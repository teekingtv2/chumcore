import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import "animate.css";
import Signup from "./Signup";

const HomeSectionOne = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="px-5 md:px-0 h-full w-[100vw] banner-section"
      style={{
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px",
      }}
    >
      <div className="banner-section-inner w-full h-full">
        <div className="container h-full py-28 md:py-40 gap-28 md:gap-10 items-center">
          <div className="w-full lg:w-[60%] mx-auto flex flex-col items-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__slower animate__animated animate__zoomInLeft"
                      : ""
                  }
                >
                  <h1 className="text-center text-white text-[30px] font-semibold md:text-[50px] leading-[1.25em] mb-10">
                    Discover Places You'll Love, Recommended by People You Trust
                  </h1>
                  <p className="text-center text-white mb-6 text-xl font-medium">
                    Stop scrolling through fake and paid reviews from strangers.
                    With Chumcore, find hangout spots recommended by friends and
                    make every outing memorable.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <div onClick={() => setShow(true)} to="" className="flex mt-8">
              <div className="title-box py-4 px-10 text-[16px] font-bold flex justify-center items-center hover:scale-105 ease-in duration-300 cursor-pointer">
                <span className="mr-2">Join Chumcore</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </div>

            <Signup show={show} setShow={setShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
