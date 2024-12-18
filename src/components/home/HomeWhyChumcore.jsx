import React from "react";
import { FaQuestion } from "react-icons/fa";
import TrackVisibility from "react-on-screen";

const HomeWhyChumcore = () => {
  return (
    <div
      className="w-[100vw] flex flex-col items-center py-10 px-5 md:px-20 lg:px-28 xl:px-32"
      id="why-us"
    >
      <div className="w-full why-chumcore-box bg-[#F5F5F5] rounded-[50px] pt-[70px] pb-[70px] md:pt-[150px] md:pb-[150px] items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-8 md:px-20">
          <div className="col-span-1 flex flex-col gap-7 md:gap-[30px]">
            <div className="w-full mx-auto mb-4 md:mb-6">
              <div className="flex justify-center md:justify-start">
                <div className="flex items-center gap-2 px-6 py-2 title-box uppercase">
                  Why <span className="font-bold">Chumcore</span>
                  <FaQuestion />
                </div>
              </div>
              {/* <h1 className="text-[27px] md:text-[40px] font-medium mb-5 ">
                Why <span className="font-bold">Chumcore</span>?
              </h1> */}
            </div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__slower animate__animated animate__fadeIn col-span-1 flex flex-col gap-7 md:gap-[30px]"
                      : "col-span-1 flex flex-col gap-7 md:gap-[30px]"
                  }
                >
                  <div className="p-5 rounded-lg flex flex-col gap-5 hover:scale-105 ease-in duration-300 border-chumWine border-[1.5px] md:border-[3px]">
                    <div className="flex items-center gap-7">
                      <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-chumWine text-white text-xl font-bold">
                        01
                      </p>
                      <p className="text-[17px] md:text-[20px] font-semibold text-[#FB2564]">
                        Authentic Recommendations:{" "}
                      </p>
                    </div>
                    <p>Trust reviews from friends, not strangers or bots.</p>
                  </div>
                  <div className="p-5 rounded-lg flex flex-col gap-5 hover:scale-105 ease-in duration-300 border-chumWine border-[1.5px] md:border-[3px]">
                    <div className="flex items-center gap-7">
                      <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-chumWine text-white text-xl font-bold">
                        02
                      </p>
                      <p className="text-[17px] md:text-[20px] font-semibold text-[#FB2564]">
                        Save Time:{" "}
                      </p>
                    </div>
                    <p>
                      No more searching multiple platforms for the best spots.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg flex flex-col gap-5 hover:scale-105 ease-in duration-300 border-chumWine border-[1.5px] md:border-[3px]">
                    <div className="flex items-center gap-7">
                      <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-chumWine text-white text-xl font-bold">
                        03
                      </p>
                      <p className="text-[17px] md:text-[20px] font-semibold text-[#FB2564]">
                        Tailored to You:{" "}
                      </p>
                    </div>
                    <p>Discover places based on your unique interests.</p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="col-span-1">
            <img
              src="/assets/images/home/Why_ChumCore.webp"
              alt=""
              className="updown"
              style={{ boxShadow: "6px 6px 6px #222" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyChumcore;
