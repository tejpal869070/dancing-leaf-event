import React from "react";
import maam3 from "../../assets/maam3.webp";
import SocialIcons from "./SocialIcons";

export default function Hero1() {
  return (
    <div className="container m-auto">
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
    </div>
  );
}
