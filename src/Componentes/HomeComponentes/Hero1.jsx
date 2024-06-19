import React, { useEffect, useState } from "react";
import img1 from "../../assets/banner4.webp";
import video from "../../assets/video-2.mp4";
import bg2 from "../../assets/preload.jpg";

// import banner2 from "../../assets/bg-4-min.jpg";
// import banner1 from "../../assets/bg-5.jpg";
import banner1 from "../../assets/photos/wedding-1846114_1920.jpg";
import banner2 from "../../assets/photos/beach-1854076_1920.jpg";
import banner3 from "../../assets/wedding.jpg";

const images = [
  { src: banner1, text: "Text 1" },
  { src: banner2, text: "Text 2" },
  { src: banner3, text: "Text 3" },
  // Add more image URLs here
];

export default function Hero1() {
  return (
    <div
      className="relative w-[100vw] h-[85vh] overflow-hidden flex justify-end align-center items-center"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%), url(${banner2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full lg:w-[50%] px-10 ">
        <p className="rubik-font  text-6xl">
          Turn Your Dream Event into a Reality
        </p>
        <p className="rubik-font mt-4 text-xl">
          Weddings are significant events in people’s lives and as such, couples
          are often willing to spend considerable amount of money to ensure{" "}
        </p>
      </div>
    </div>
  );
}
