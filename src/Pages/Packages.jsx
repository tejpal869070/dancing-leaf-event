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
                  <h2 className=" font-bold norican-regular text-4xl py-2">{packageItem.heading}</h2>
                  <h2 className=" font-boldtext-xl py-2">Price : ${packageItem.price}</h2>
                  <ul>
                    {packageItem.description.map((item, index) => (
                      <li key={index} className=" font-thin text-black text-lg font-[100] flex ">
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
