import React from "react";
import bg1 from "../../assets/bg-7.jpg";
import AnimatedHeadings from "./AnimatedHeading";

export default function Banner() {
  return (
    <div>
      <div
        className=" relative w-[100vw] h-[60vh] lg:h-[80vh] bg-black bg-no-repeate"
        style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover",  }}
      ></div>
      <div className="absolute  flex flex-col items-center justify-center top-0 w-full h-[70%] lg:h-full">
        <AnimatedHeadings />
      </div>
    </div>
  );
}
