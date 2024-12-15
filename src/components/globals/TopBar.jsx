import { FaFacebook, FaInstagram, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="w-full bg-[#F52F58]">
      <div className="header-container px-2 md:px-0 py-0 flex justify-between items-center text-[#fff]">
        <div className="hidden md:flex gap-1 h-full">
          <Link
            to="https://instagram.com/"
            className="hidden md:inline-block cursor-pointer hover:scale-105 ease-in duration-300 border-l-[1px] border-[#ffffff71] py-4 px-3"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://instagram.com/"
            className="hidden md:inline-block cursor-pointer hover:scale-105 ease-in duration-300 border-l-[1px] border-[#ffffff71] py-4 px-3"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://instagram.com/"
            className="cursor-pointer hover:scale-105 ease-in duration-300 border-x-[1px] border-[#ffffff71] py-4 px-3"
          >
            <FaTwitter />
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
          to="mailto:"
          className="w-max flex gap-2 justify-center items-center border-l-[1px] border-r-[1px] border-[#ffffffa1] py-3 px-2 md:px-5"
        >
          <FaMailBulk />
          <span className="font-[400]">Mail Us</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
