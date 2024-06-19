import React from "react";
import SocialIcons from "./AboutComponentes/SocialIcons";
import logo from "../assets/logo6.png";
import bg1 from "../assets/footer-bg.jpg";
import coralLogo from "../assets/loog.png";

export default function Footer() {
  return (
    <footer
      className="  relative z-[10]    py-8 bg-no-repeat bg-contain " 
    >
      <div className="h-1 bg-[#9d1f60] rounded-full w-[80vw] m-auto mb-4"></div>
      <div className="container mx-auto text-center font-bold shadow-lg border-8 border-white">
        <img alt="logo" src={logo} className="w-44 h-44 m-auto" />
        <p className="text-lg font-semibold">Connect with Us</p>
        <div className="flex justify-center">
          <SocialIcons />
        </div>
        <div className="mt-8">
          <p className=" text-lg font-semibold">Contact Information</p>
          <p className="">Bay Area California</p>
          <p className="">Phone: +1-669-3508979</p>
          <p className="">Email: hello@dancingleafevents.com</p>
        </div>
        <div className="flex flex-wrap justify-between text-lg mt-8 w-full bg-[#ffffffde] py-2 rounded-lg px-2">
          <p className="text-left">
            &copy; 2024 Your Website. All rights reserved.
          </p>
          <p>
            Designed & Developed by
            <a
              target="_blank"
              rel="noreferrer"
              href="https://coralitsolution.com/"
            >
              <img alt="logo" src={coralLogo} className="w-40 inline" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
