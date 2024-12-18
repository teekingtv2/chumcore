import { FaArrowCircleRight } from "react-icons/fa";
import Signup from "./Signup";
import { useState } from "react";

const HomeBePart = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full banner-section text-white">
      <div className="container pt-16 pb-32 items-center px-8 md:px-0">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center text-xl md:text-xl font-semibold">
            Be Part of the Chumcore Community!
          </div>

          <div
            onClick={() => setShow(true)}
            className="title-box py-4 px-10 text-[16px] font-bold flex justify-center items-center hover:scale-105 ease-in duration-300 cursor-pointer"
          >
            <span className="mr-2">Join Chumcore</span>
            <FaArrowCircleRight />
          </div>

          <Signup show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};

export default HomeBePart;
