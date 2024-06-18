import React from "react";
import { HomePageDummyData } from "../../Data/HomePage";
import branchimg from "../../assets/branch-img.png";
import bannerimg1 from "../../assets/photos/img2.jpg";

export default function AboutUsHome() {
  return (
    <div className="container m-auto pt-20  px-4 lg:px-0">
      <div className="flex flex-wrap justify-between ">
        <div className="w-full lg:w-[50%]">
          <p className=" poetsen-one-regular text-lg text-[#F28B90]">
            About us
          </p>
          <h2 className=" courgette-regular text-4xl mt-6">
            We Plan & Design Weddings That Capture the Imagination
          </h2>
          <img alt="branch" src={branchimg} className="w-40" />
          <p className="mt-6">
            Weddings are significant events in people’s lives and as such,
            couples are often willing to spend considerable amount of money to
            ensure that their weddings are well-organized. Wedding planners are
            often used by couples who work long hours and have little spare time
            available for sourcing and managing wedding venues.
          </p>
          <div className="mt-12">
            <button className="px-6 py-3 bg-[#ebaf9d] rounded-lg  font-bold text-[#272727] ">
              CONTACT
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <img alt="slider" src={HomePageDummyData[5].image} />
        </div>
      </div>

      <div className="relative w-full h-[60vh]   overflow-hidden flex justify-center items-center py-10">
        <img alt="img2" src={bannerimg1} className="w-full h-full object-cover" />
        <div className="absolute z-999 flex flex-col justify-center  items-center w-[99%] h-[80%] m-auto inset-0 bg-[#a7a7a770] ">
          <h2 className="courgette-regular  text-center text-[black] text-6xl text-white">
            We Create Unforgettable <br/> Experiences
          </h2>
        </div>
      </div>
    </div>
  );
}
