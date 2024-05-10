import React from "react";
import SocialIcons from "./AboutComponentes/SocialIcons";
import logo from "../assets/logo6.png";
import footer1 from "../assets/foorer2.png";

export default function Footer() {
  return (
    <footer className=" relative z-[10] bg-white py-8  ">
      <div className="h-1 bg-[#9d1f60] rounded-full w-[80vw] m-auto mb-4"></div>
      <div className="container mx-auto text-center font-bold">
        <img alt="logo" src={logo} className="w-40 h-40 m-auto" />
        <p className="text-lg font-semibold">Connect with Us</p>
        <div className="flex justify-center">
          <SocialIcons />
        </div>
        <div className="mt-8">
          <p className=" text-lg font-semibold">Contact Information</p>
          <p className="">123 Main Street, Cityville, ABC 12345</p>
          <p className="">Phone: +1-123-456-7890</p>
          <p className="">Email: info@example.com</p>
        </div>
        <p className=" text-lg mt-8">
          &copy; 2024 Your Website. All rights reserved.
        </p>
      </div>
      <div className=" flex  absolute bottom-0 z-[-1] ">
        <img
          alt="footer1"
          className="w-1/2"
          src={footer1}
        />
        <img
          alt="footer1"
          className="w-1/2"
          src={footer1}
        />
      </div>
    </footer>
  );
}
