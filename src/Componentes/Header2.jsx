import React, { useEffect, useState } from "react";
import logo from "../assets/logo3.png";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { MdLabelImportant } from "react-icons/md";


export default function Header2() {
  const [isOpened, setOpened] = useState(false);

  const openMenu = () => {
    setOpened(!isOpened);
  };


  const { pathname } = useLocation();

  useEffect(() => {
    setOpened(false)
  }, [pathname]);

  return (
    <header className=" fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80  shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0 py-2">
            <a aria-current="page" className="flex items-center" href="/">
              <img className="h-20 w-auto" src={logo} alt="" />
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/"}
            >
              Home
            </Link>
            <Link
              aria-current="page"
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/services"}
            >
              Services
            </Link>
            <Link
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/about-us"}
            >
              About
            </Link>
            <Link
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/contact"}
            >
              Contact
            </Link>
          </div>

          <div className="block md:hidden">
            {isOpened ? (
              <GiCancel size={30} onClick={openMenu}  className="animate-spin"/>
            ) : (
              <MdOutlineMenuOpen size={30} onClick={openMenu} />
            )}
          </div>
        </div>
      </div>

      {isOpened ? (
        <div className="w-[60vw]  h-[30vh] flex pt-16 justify-center w3-animate-top">
          <div className="flex flex-col gap-4">
            <Link to={"/"} className="text-xl font-semibold flex gap-1"><MdLabelImportant className="mt-1" /> Home</Link>
            <Link to={"/services"} className="text-xl font-semibold flex gap-1"><MdLabelImportant className="mt-1" /> Services</Link>
            <Link to={"/about-us"} className="text-xl font-semibold flex gap-1"><MdLabelImportant className="mt-1" /> About</Link>
            <Link to={"/contact"} className="text-xl font-semibold flex gap-1"><MdLabelImportant className="mt-1" /> Contact</Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
