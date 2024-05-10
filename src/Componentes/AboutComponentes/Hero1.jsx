import React from "react";
import maam3 from "../../assets/maam3.webp";
import SocialIcons from "./SocialIcons";
import corner1 from "../../assets/corner1.png"

export default function Hero1() {
  return (
    <div className=" relative m-auto">
      <div className="flex flex-wrap-reverse   items-center justify-around justify-center py-6">
        <div className=" relative py-12 w-full lg:w-[48%] m-auto   flex flex-col items-center justify-center">
          <p className="text-4xl font-bold norican-regular ">Saloni Mishra</p>
          <p className="mt-4 text-lg font-semibold">Entrepreneur</p>
          <SocialIcons />
        </div>
        <div className="w-full lg:w-[48%] m-auto ">
          <img alt="maa3" src={maam3} className="w-[60%] m-auto" />
        </div>
      </div>
      <img src={corner1} alt="corner1" className="absolute top-0 right-0 w-40" />
      <img src={corner1} alt="corner1" className=" -rotate-90 absolute top-0 left-0 w-40" />
      <img src={corner1} alt="corner1" className=" rotate-90 absolute bottom-0 right-0 w-40" />
      <img src={corner1} alt="corner1" className=" -rotate-180 absolute bottom-0 left-0 w-40" />
    </div>
  );
}
