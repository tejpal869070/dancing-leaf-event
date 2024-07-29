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
    <div>
      <div
        className="  hidden lg:flex border-b-1 border-black relative w-[100vw] h-[75vh] lg:h-[85vh] overflow-hidden flex justify-end align-center items-center"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%), url(${banner2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full lg:w-[50%] px-6 lg:px-10 ">
          <p className="rubik-font   text-5xl lg:text-6xl">
            Turn Your{" "}
            <span className="text-[#e4686f]  font-semibold">
              Dream Event into{" "}
            </span>
            a Reality
          </p>
          <p className="rubik-font mt-4 text-xl  ">
            Here unforgettable events come to life. With a passion for precision
            and creativity, we specialize in crafting seamless experiences
            tailored to your vision.
          </p>
        </div>
      </div>

      <div
        className="block lg:hidden border-b-2 border-black relative w-[100vw] h-[80vh] lg:h-[85vh] overflow-hidden flex justify-end align-center items-center"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.8) 100%, rgba(255,255,255,0) 100%), url(${banner2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      >
        <div className="w-full lg:w-[50%] px-6 lg:px-10 ">
          <p className="rubik-font   text-5xl lg:text-6xl leading-[55px]">
            Turn Your{" "}
            <span className="text-[#e4686f]  font-semibold">
              Dream Event into{" "}
            </span>
            a Reality
          </p>
          <p className="rubik-font mt-4 text-xl text-justify">
            Here unforgettable events come to life. With a passion for precision
            and creativity, we specialize in crafting seamless experiences
            tailored to your vision.
          </p>
        </div>
      </div>
    </div>
  );
}
