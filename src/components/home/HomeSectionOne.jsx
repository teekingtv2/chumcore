import React from "react";
import bannerVidBg from "../../../public/assets/videos/banner-bg.mp4";
import NavBar from "../globals/NavBar";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import TrackVisibility from "react-on-screen";

const HomeSectionOne = () => {
  return (
    <div
      className="px-5 md:px-0 h-full w-[100vw] banner-section"
      style={{
        borderBottomLeftRadius: "100px",
        borderBottomRightRadius: "100px",
      }}
    >
      <div className="banner-section-inner w-full h-full">
        <div className="container h-full py-20 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-10 items-center">
          <div className="cols-span-1 flex flex-col md:pl-[15%]">
            <span className="font-bold uppercase text-sm text-white mb-2 bg-chumWine px-3 py-2 w-max leftRight">
              Travelling or Moving?
            </span>
            <h1 className=" text-white text-[30px] font-medium md:text-[50px] leading-[1.25em] mb-10">
              Discover <span className="font-black">Places</span> You'll Love,
              Recommended by <span className="font-black">People</span> You
              Trust
            </h1>
            <p className="text-white mb-6">
              Stop relying on impersonal reviews from strangers and bots.
              Chumcore helps you find the perfect hangout spot based on
              word-of-mouth from friends in your new city.
            </p>

            <div className="flex items-center gap-6 mb-8 text-chumLightGreen">
              <img
                src="/assets/images/home/avatars.png"
                alt=""
                className="z-40 dancingSlide"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-bold">1000+</span>
                <span className="">Active Subscribers</span>
              </div>
            </div>
            <Link to="" className="flex">
              <div className="btnn2 py-4 px-7 text-[16px] font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                <span className="mr-2">Join Other Subscribers</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="col-span-1">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__slower animate__animated animate__flipInX"
                      : ""
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
