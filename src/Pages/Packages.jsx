import React from "react";
import { PackagesData } from "../Data/PackagesData";
import { FcBookmark } from "react-icons/fc";
import video1 from "../assets/video5.mp4";

export default function Packages() {
  return (
    <div className="">
      <div className=" relative  m-auto  w-full ">
        <video autoPlay muted loop className=" w-[100%] hidden lg:block">
          <source src={video1} type="video/mp4" />
        </video>
        <div className="lg:absolute container mt-32 lg:mt-40  mb-16  m-auto bottom-0 left-0  top-0 right-0 h-[100vh] pb-10 overflow-x-scroll no-scrollbar ">
          <div className="flex flex-wrap justify-center">
            {PackagesData.map((packageItem, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-[#ffffff87] rounded shadow-md p-4">
                  <img
                    src={packageItem.image}
                    alt={packageItem.heading}
                    className="w-full h-52 object-cover rounded-t"
                  />
                  <h2 className=" font-bold norican-regular text-4xl py-2">
                    {packageItem.heading}
                  </h2>
                  <div
                    href="#_"
                    className="relative px-5 py-2 font-medium text-white group my-2 w-[140px] "
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#e36870] group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-[#e36870] group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                    <span className="relative"> Price:- ${packageItem.price} </span>
                  </div>
                  <ul>
                    {packageItem.description.map((item, index) => (
                      <li
                        key={index}
                        className=" font-thin text-black text-lg font-[100] flex "
                      >
                        <FcBookmark className="mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
