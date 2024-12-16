import React from "react";
import { FaArrowUp } from "react-icons/fa";

const HowCard = ({ title, description, image }) => {
  return (
    <div className="col-span-1 flex flex-col gap-5 md:gap-7 orange-box text-black">
      <div className="text-2xl md:text-3xl font-bold ">{title}</div>
      <div className="text-gray-700 text-[17px] mb-2">{description}</div>
      <div className="flex justify-between items-center">
        <img
          src={`/assets/images/icons/${image}`}
          alt=""
          style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
          className="w-[60px]"
        />
        <div className="w-12 h-12 p-3 border-[#33333359] border-[1px] rounded-full flex justify-center items-center">
          <FaArrowUp className="text-chumOrange" />
        </div>
      </div>
    </div>
  );
};

export default HowCard;
