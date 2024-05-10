import React from "react";
import cake from "../../assets/cake.png";
import gif1 from "../../assets/gif2.gif"

export default function Cake() {
  return (
    <div className="container m-auto mt-6"  style={{
        backgroundImage: `url(${gif1})`,
        backgroundPosition: "center",
        backgroundColor: "#fff8daf2",
      }}>
      <div className="flex flex-wrap items-center justify-center justiy-between ">
        <div className="w-[98%] lg:w-[45%] px-6">
          <h1 className="mb-6 text-[42px]  text-[#9d1f60] norican-regular font-[800]">
            Customized Cake
          </h1>
          <p className="text-lg font-semibold">
          Indulge in the sweetest treat with our made-to-order custom cakes! From intricate designs to mouthwatering flavors, each cake is crafted to perfection, just for you.
          </p>

          <div className="mt-6">
            <a href="#_" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#9d1f60] rounded-lg group-hover:text-black">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#edda8c]  group-hover:-rotate-180 ease"></span>
                <span class="relative">Order Now.</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>
        </div>
        <div className="w-[98%] lg:w-[45%] ">
          <img alt="cake" src={cake} className="w-[80%] m-auto " />
        </div>
      </div>
    </div>
  );
}
