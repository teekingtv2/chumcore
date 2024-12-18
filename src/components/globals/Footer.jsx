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
    <div className="fixed bottom-0 w-full z-30 md:px-0 bg-[#000] text-[#fff] py-3 md:py-4">
      <div className="header-container px-5 md:px-0">
        <div className="text-[10px] md:text-[11px] mb-2">
          © 2024 {import.meta.env.VITE_APP_NAME}. All rights reserved
        </div>
        <div className="flex items-center justify-between font-bold">
          <div className="flex text-[10px] md:text-[11px]">
            <Link to="" className="border-x-[1.5px] border-[#fff] px-2">
              About
            </Link>
            <Link to="" className="border-r-[1.5px] border-[#fff] px-2">
              Privacy Policy
            </Link>
            <Link to="" className="border-r-[1.5px] border-[#fff] px-2">
              Terms of Service
            </Link>
          </div>
          <div className="flex gap-1 md:gap-2">
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
        {/* ATTENTION: We dont sell any products through the website. */}
        {/* <div className="col-span-1 text-[17px] md:text-[18px] flex gap-6 items-center justify-end"> */}
        {/* <Link to="https://x.com/">
            <FaTwitter />
          </Link>
          <Link to="https://telegram.com/">
            <FaTelegram />
          </Link>
          <Link to="https://discord.com/">
            <FaDiscord />
          </Link> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
