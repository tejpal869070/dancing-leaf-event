import React, { useState } from "react";
import aboutimg from "../../assets/design.png";
import bannerimg1 from "../../assets/photos/img2.jpg";

export default function AboutUsHome() {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (visible) => {
    setIsVisible(visible);
  };
  return (
    <div className="container m-auto  md:pt-12 lg:pt-20  px-4 lg:px-0">
      <div className="flex flex-wrap justify-between ">
        <div className="w-full lg:w-[50%]">
          <h2 className=" rubik-font  text-4xl mt-6">
            We <span className="text-[#e4686f] font-semibold">Plan</span> &{" "}
            <span className="text-[#e4686f] font-semibold">Design</span>{" "}
            extraordinary events that Capture{" "}
            <span className="text-[#e4686f] font-semibold">
              the Imaginations
            </span>
          </h2>
          <p className="mt-6 text-lg text-justify">
            With a passion for precision and a flair for creativity, we
            specialize in crafting unforgettable experiences tailored to your
            unique vision. Whether it's a corporate gathering, a dream wedding,
            or a milestone celebration, our dedicated team ensures every detail
            is meticulously planned and flawlessly executed. Let us bring your
            ideas to life and make your event an occasion to remember, with
            professionalism and a personal touch that sets us apart.
          </p>
          <p className="mt-6 text-lg text-justify">
            Relax and watch your event dreams come true with our expert touch.
            Experience excellence in every detail with Dancing Leaf Events.
          </p>
        </div>
        <div className="w-full lg:w-[40%]">
          <img alt="slider" src={aboutimg} />
        </div>
      </div>

      <div className="relative w-full h-[60vh]   overflow-hidden flex justify-center items-center py-10">
        <img
          alt="img2"
          src={bannerimg1}
          className="w-full h-full object-cover"
        />
        <div className="absolute z-999 flex flex-col justify-center  items-center w-[99%] h-[80%] m-auto inset-0 bg-[#a7a7a770] ">
          <h2 className="text-center font-semibold text-white text-5xl md:text-6xl">
            <span className="">We Create Unforgettable </span>
            <br /> Experiences
          </h2>
        </div>
      </div>
    </div>
  );
}
