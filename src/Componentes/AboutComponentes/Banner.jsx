import React from "react";
import bg1 from "../../assets/bg-4.jpg";
import bg2 from "../../assets/profile-bg-removebg.png";
import maampic from "../../assets/maam2.png";

export default function Banner() {
  return (
    <div className="">
      <div
        className="flex flex-row-reverse  items-center justify-center justify-around  w-full h-screen bg-black bg-no-repeat"
        style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}
      >
        <div className="w-[90%] lg:w-1/2  flex flex-col justify-center items-center  ">
          <p className="text-[#9d1f60] font-bold text-7xl norican-regular" style={{textShadow:"4px 4px 4px white"}}>
            Where imagination meets reality.
          </p>
          <p className="text-xl mt-4  lg:pr-12 font-semibold" style={{textShadow:"5px 5px 5px white"}}>
            At Dancing Leaf , we craft unforgettable experiences tailored to
            your vision. With meticulous planning and seamless execution, we
            transform your events into cherished memories. Let us bring your
            ideas to life, leaving you free to enjoy every moment."
          </p>
        </div>
        <div
          className="1/2 invisible hidden lg:block"
          style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover" }}
        >
          <img alt="maam" src={maampic} className="w-[75%] m-auto" />
        </div>
      </div>
    </div>
  );
}
