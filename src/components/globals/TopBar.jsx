import { FaInstagram, FaMailBulk, FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa/index.esm";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="w-full bg-[#F52F58]">
      <div className="header-container px-2 md:px-0 py-0 flex justify-between items-center text-[#fff]">
        <div className="hidden md:flex gap-1 h-full">
          <Link
            to="https://www.instagram.com/chumcoreapp"
            className="hidden md:inline-block cursor-pointer hover:scale-125 ease-in duration-300 border-l-[1px] border-[#ffffff71] py-4 px-3"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://youtube.com/@chumcoreapp"
            className="hidden md:inline-block cursor-pointer hover:scale-125 ease-in duration-300 border-l-[1px] border-[#ffffff71] py-4 px-3"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.tiktok.com/@chumcore"
            className="cursor-pointer hover:scale-125 ease-in duration-300 border-x-[1px] border-[#ffffff71] py-4 px-3"
            target="_blank"
          >
            <FaTiktok />
          </Link>
        </div>

        <marquee
          behavior=""
          direction=""
          className="w-[70%] p-0 m-0 font-semibold md:font-semibold text-[12px] md:text-[14px]"
        >
          Stop relying on impersonal reviews from strangers and bots!
        </marquee>

        <Link
          to="mailto:info@chumcore.io"
          className="w-max flex gap-2 justify-center items-center border-l-[1px] border-r-[1px] border-[#ffffffa1] py-3 px-2 md:px-5 hover:scale-110 ease-in duration-300"
          target="_blank"
        >
          <FaMailBulk />
          <span className="font-[400]">Mail Us</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
