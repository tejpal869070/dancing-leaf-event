import React from "react";
import img1 from "../../assets/banner4.webp";
import video from "../../assets/video-2.mp4";

export default function Hero1() {
  return (
    <div>
      <div class="block lg:hidden relative h-screen w-screen flex justify-center items-center bg-cover bg-black"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      >
        <div class="absolute inset-0 flex justify-center items-center bg-[#b8ecff63]">
          <div style={{ textShadow: "4px 4px 4px white" }} class=" w3-animate-zoom text-[#9d1f60] norican-regular font-bold text-center p-4 text-5xl lg:text-6xl leading-[10vh] lg:leading-[16vh] animate-shake">
            Turn Your Dream Event <br /> into a Reality
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-full h-screen overflow-hidden bg-black ">
        <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto z-0"
          autoPlay
          muted
          loop
        >
          {/* Add your video source */}
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="absolute inset-0 flex justify-center items-center bg-[#2b2c2d61]">
          <div
            class="text-[#9d1f60] norican-regular font-bold text-center p-4 text-5xl lg:text-6xl leading-[10vh] lg:leading-[16vh] animate-shake"
            style={{ textShadow: "4px 4px 4px white" }}
          >
            Turn Your Dream Event <br /> into a Reality
          </div>
        </div>
      </div>
    </div>
  );
}
