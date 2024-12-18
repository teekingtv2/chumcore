import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Signup from "../home/Signup";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [show, setShow] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <TopBar />
      <div className="w-full border-b-[1px] border-[#ffffff57] bg-white z-[100]">
        <div className="header-container py-3 md:py-3 px-5 md:px-0 ">
          <div className="flex justify-between items-center w-full h-full">
            <Link to="/" className="flex flex-col gap-0">
              <img
                src="/assets/images/logo.png"
                alt=""
                className="w-[50px] md:w-[70px]"
              />
            </Link>
            <div>
              <ul className="hidden md:flex gap-10 text-[16px] font-medium items-center">
                <Link
                  to="/"
                  className={activeLink === "home" ? "active" : ""}
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Link>
                <AnchorLink
                  href="#how-it-works"
                  className={
                    activeLink === "#how-it-works"
                      ? "active menu-link"
                      : "menu-link"
                  }
                  onClick={() => onUpdateActiveLink("#how-it-works")}
                >
                  How It Works
                </AnchorLink>
                <AnchorLink
                  href="#why-us"
                  className={
                    activeLink === "#why-us" ? "active menu-link" : "menu-link"
                  }
                  onClick={() => onUpdateActiveLink("#why-us")}
                >
                  Why Us
                </AnchorLink>
                <AnchorLink
                  href="#social-proof"
                  className={
                    activeLink === "#social-proof"
                      ? "active menu-link"
                      : "menu-link"
                  }
                  onClick={() => onUpdateActiveLink("#social-proof")}
                >
                  Social Proof
                </AnchorLink>
              </ul>
              <div onClick={handleNavToggle} className="md:hidden">
                <AiOutlineMenu className="text-gray-900" size={25} />
              </div>
            </div>

            <div
              onClick={() => setShow(true)}
              className="hidden md:block title-box py-[10px] px-14 font-semibold cursor-pointer"
            >
              Sign Up
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={
              nav
                ? "md:hidden fixed z-[150] left-0 top-0 w-full h-screen bg-black/70 "
                : ""
            }
            style={{ zIndex: "11111" }}
          >
            <div
              className={
                nav
                  ? "fixed left-0 top-0 ease-in duration-500 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000000fa] py-10 px-5"
                  : "fixed left-[-130%] top-0 ease-in duration-500 py-10"
              }
            >
              <div>
                <div className="flex w-full justify-between items-center">
                  <Link to="/" className="flex flex-col gap-0">
                    <p className="uppercase font-bold text-[20px] text-white tracking-[8px] leading-[15px] mb-0">
                      Chumcore
                    </p>
                  </Link>
                  <div
                    onClick={handleNavToggle}
                    className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer text-gray-300"
                  >
                    <AiOutlineClose size={25} />
                  </div>
                </div>
                <div className="border-b border-gray-500 my-5"></div>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase ">
                  <Link
                    onClick={() => setNav(false)}
                    to="/"
                    className={
                      activeLink === "home" ? "active" : "text-gray-200 "
                    }
                  >
                    <li className="py-4 text-sm">Home</li>
                  </Link>
                  <AnchorLink
                    onClick={() => setNav(false)}
                    href="#how-it-works"
                    className={
                      activeLink === "#how-it-works"
                        ? "active"
                        : "text-gray-200"
                    }
                  >
                    <li className="py-4 text-sm">How It Wworks</li>
                  </AnchorLink>
                  <AnchorLink
                    onClick={() => setNav(false)}
                    href="#why-us"
                    className={
                      activeLink === "#why0us" ? "active" : "text-gray-200"
                    }
                  >
                    <li className="py-4 text-sm">Why Us</li>
                  </AnchorLink>
                  <Link
                    onClick={() => setNav(false)}
                    to=""
                    className={
                      activeLink === "contact" ? "active" : "text-gray-200"
                    }
                  >
                    <li className="py-4 text-sm">Sign Up</li>
                  </Link>
                </ul>
                <div className="pt-40">
                  <p className="uppercase tracking-widest text-[#a1a1a1] text-center">
                    Connect with us
                  </p>
                  <div className="flex items-center justify-center gap-5 my-4 w-full sm:w-[80%] text-gray-200">
                    <Link
                      to="https://instagram.com/chumcoreapp"
                      className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                      target="_blank"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      to="https://youtube.com/@chumcoreap"
                      className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                    <Link
                      to="https://www.tiktok.com/@chumcore"
                      className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                      target="_blank"
                    >
                      <FaTiktok />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Signup show={show} setShow={setShow} />
    </>
  );
};

export default NavBar;
