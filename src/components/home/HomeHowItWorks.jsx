import React from "react";
import { howItWorksData } from "../../utils/data";
import HowCard from "./HowCard";
import { FaQuestion } from "react-icons/fa/index.esm";

const HomeHowItWorks = () => {
  return (
    <div className="w-full" id="how-it-works">
      <div className="container pt-16 pb-16 items-center px-8 md:px-0">
        <div className="w-full md:w-[70%] mx-auto md:text-center mb-14">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-6 py-2 title-box uppercase">
              <span>How does it work</span>
              <FaQuestion />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {howItWorksData &&
            howItWorksData.map((item, i) => (
              <HowCard
                key={i}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHowItWorks;
