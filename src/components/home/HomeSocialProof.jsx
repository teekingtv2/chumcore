import React from "react";
import { socialData } from "../../utils/data";
import SocialCard from "./SocialCard";
import { FaComment } from "react-icons/fa";

const HomeSocialProof = () => {
  return (
    <div className="w-full" id="social-proof">
      <div className="container py-28 items-center px-8 md:px-0">
        <div className="w-full md:w-[70%] mx-auto md:text-center mb-14">
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 px-6 py-2 title-box uppercase">
              <span>SOcial Proof</span>
              <FaComment />
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mb-8 text-[#FB2564]">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 px-6">
          {socialData &&
            socialData.map((item, i) => (
              <SocialCard
                key={i}
                username={item.username}
                testimonial={item.testimonial}
                avatar={item.avatar}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSocialProof;
