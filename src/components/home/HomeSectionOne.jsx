import React from "react";
import bannerVidBg from "../../../public/assets/videos/banner-bg.mp4";
import NavBar from "../globals/NavBar";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import "animate.css";

const HomeSectionOne = () => {
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
            {/* <span className="font-bold uppercase text-sm text-black mb-2 bg-chumLightGreen px-3 py-2 w-max leftRight">
              Travelling or Moving?
            </span> */}
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

            <div className="flex items-center gap-6 mb-8 text-white">
              {/* <img
                src="/assets/images/home/avatars.png"
                alt=""
                className="z-40 w-[120px] dancingSlide"
              /> */}
              {/* <div className="flex flex-col">
                <span className="text-3xl font-bold">1,000+</span>
                <span className="text-sm">Active Subscribers</span>
              </div> */}
            </div>
            <Link to="" className="flex">
              <div className="title-box py-4 px-10 text-[16px] font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                <span className="mr-2">Join Chumcore</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>
          {/* <div className="hidden md:block col-span-1">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInRight" : ""
                  }
                >
                  <div className="grid grid-cols-2 gap-x-5 items-start justify-center">
                    <div className="col-span-1">
                      <img
                        src="/assets/images/home/banner1.jpg"
                        alt=""
                        style={{
                          borderTopLeftRadius: "20px",
                          borderTopRightRadius: "60px",
                          borderBottomLeftRadius: "60px",
                          borderBottomRightRadius: "20px",
                        }}
                        className="updown"
                      />
                    </div>
                    <div className="col-span-1">
                      <img
                        src="/assets/images/home/banner2.jpg"
                        alt=""
                        style={{
                          borderTopLeftRadius: "20px",
                          borderTopRightRadius: "60px",
                          borderBottomLeftRadius: "60px",
                          borderBottomRightRadius: "20px",
                        }}
                        className="dancingSlide"
                      />
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
            <div className="grid grid-cols-2 gap-x-5 items-end justify-center -mt-5">
              <div className="col-span-1">
                <img
                  src="/assets/images/home/banner3.jpg"
                  alt=""
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "60px",
                    borderBottomLeftRadius: "60px",
                    borderBottomRightRadius: "20px",
                  }}
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/assets/images/home/banner4.jpg"
                  alt=""
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "60px",
                    borderBottomLeftRadius: "60px",
                    borderBottomRightRadius: "20px",
                  }}
                  className="updown"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
