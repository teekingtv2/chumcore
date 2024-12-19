import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bottom-0 w-full z-30 md:px-0 bg-[#000] text-[#fff] py-8">
      <div className="header-container px-5 md:px-0 flex flex-col items-center">
        {/* <div className="text-[12px] md:text-[13px] mb-2">
          © 2024 {import.meta.env.VITE_APP_NAME}. All rights reserved
        </div> */}
        <div className="flex gap-1 md:gap-2 text-2xl">
          <Link
            to="https://www.instagram.com/chumcoreapp"
            className="cursor-pointer hover:scale-125 ease-in duration-300 px-2"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://youtube.com/@chumcoreapp"
            className="cursor-pointer hover:scale-125 ease-in duration-300 px-2"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.tiktok.com/@chumcore"
            className="cursor-pointer hover:scale-125 ease-in duration-300 px-2"
            target="_blank"
          >
            <FaTiktok />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
