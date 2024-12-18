import React from "react";
import { FaArrowUp } from "react-icons/fa";
import TrackVisibility from "react-on-screen";

const SocialCard = ({ username, testimonial }) => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div
          className={
            isVisible ? "animate__slower animate__animated animate__zoomIn" : ""
          }
        >
          <div className="col-span-1 flex flex-col gap-5 md:gap-7 card-box2 text-white">
            <img
              src={`/assets/images/home/avatar.svg`}
              alt=""
              className="w-[60px] h-[60px] rounded-full"
            />
            <div className="text-2xl md:text-3xl font-bold ">{username}</div>
            <div className="text-[17px] mb-2">{testimonial}</div>
          </div>
        </div>
      )}
    </TrackVisibility>
  );
};

export default SocialCard;
