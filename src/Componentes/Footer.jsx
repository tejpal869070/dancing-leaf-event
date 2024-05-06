import React from "react";
import SocialIcons from "./AboutComponentes/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="h-1 bg-[#9d1f60] rounded-full w-[80vw] m-auto mb-4"></div>
      <div className="container mx-auto text-center">
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
        <p className=" text-sm mt-8">
          &copy; 2024 Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
