import React, { useEffect, useState } from "react";
import logo from "../assets/logo3.png";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { MdLabelImportant } from "react-icons/md";

export default function Header2() {
  const [isOpened, setOpened] = useState(false);
  const { pathname } = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const openMenu = () => {
    setOpened(!isOpened);
  };

  useEffect(() => {
    setOpened(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;
      setIsExpanded(scrollPercentage >= 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="heaader"
      className={`fixed inset-x-0 top-0 z-30 mx-auto  border border-gray-100 bg-white/80  shadow backdrop-blur-lg   lg:w-[70%] ${
        isExpanded
          ? "full-width lg:rounded-lg md:top-0 lg:px-16 "
          : "full-width-reverse lg:rounded-full md:top-6"
      }`}
    >
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
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/about-us"}
            >
              About
            </Link>
            <Link
              aria-current="page"
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 relative"
               
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              Services
              {isServicesHovered && (
                <div
                  className="absolute top-full left-0 w-48 bg-white shadow-md py-2"
                  style={{ marginTop: 5 }} // Add this to position the dropdown below the Services tab
                >
                  <Link
                    to={{ pathname: "/services", search: "?service=private" }}
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                  >
                    Private
                  </Link>
                  <Link
                    to={{ pathname: "/services", search: "?service=corporate" }}
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                  >
                    Corporate
                  </Link>
                  <Link
                    to={{ pathname: "/services", search: "?service=wedding" }}
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                  >
                    Wedding
                  </Link>
                </div>
              )}
            </Link>
            <Link
              aria-current="page"
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/rentals"}
            >
              Rentals
            </Link>

            <Link
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/gallery"}
            >
              Gallery
            </Link>

            <Link
              className="inline-block font-bold rounded-lg px-2 py-1 nav-links text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/contact"}
            >
              Enquiry
            </Link>
          </div>

          <div className="block md:hidden">
            {isOpened ? (
              <GiCancel size={30} onClick={openMenu} className="animate-spin" />
            ) : (
              <MdOutlineMenuOpen size={30} onClick={openMenu} />
            )}
          </div>
        </div>
      </div>

      {isOpened ? (
        <div className="w-[60vw]  pb-16 flex pt-16 justify-center w3-animate-top">
          <div className="flex flex-col gap-4">
            <Link to={"/"} className="text-xl font-semibold flex gap-1">
              <MdLabelImportant className="mt-1" /> Home
            </Link>
            <Link to={"/about-us"} className="text-xl font-semibold flex gap-1">
              <MdLabelImportant className="mt-1" /> About
            </Link>
            <Link to={"/services"} className="text-xl font-semibold flex gap-1">
              <MdLabelImportant className="mt-1" /> Services
            </Link>

            <Link to={"/gallery"} className="text-xl font-semibold flex gap-1">
              <MdLabelImportant className="mt-1" /> Gallery
            </Link>
            <Link to={"/rentals"} className="text-xl font-semibold flex gap-1">
              <MdLabelImportant className="mt-1" /> Rentals
            </Link>
            <Link to={"/contact"} className="text-xl font-semibold flex gap-1">
              <MdLabelImportant className="mt-1" /> Contact
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
