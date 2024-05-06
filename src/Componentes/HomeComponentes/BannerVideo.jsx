import React from "react";
import video from "../assets/video-1.mp4"

export default function BannerVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay muted loop className="absolute top-0 left-1/2 min-h-screen w-auto md:min-w-full md:w-full transform -translate-x-1/2 z-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">Your Heading Goes Here</h1>
      </div>
    </div>
  );
}
