import React from "react";

export default function Counter() {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap  container items-center justify-center m-auto justify-around py-6 lg:py-12 w-[90%] lg:w-[70%] bg-gradient-to-tr from-pink-300 to-teal-200 rounded-lg lg:rounded-full">
        <div className="w-full lg:w-1/4 flex mb-4 lg:mb-0 flex-col items-center m-auto">
          <p className="animate-pulse text-5xl lg:text-4xl text-[#257221] font-bold">700+</p>
          <h1 className="font-semibold text-xl">Events</h1>
        </div>
        <div className="w-full lg:w-1/4 flex mb-4 lg:mb-0 flex-col items-center m-auto ">
          <p className="animate-pulse text-5xl lg:text-4xl text-[#257221] font-bold">100%</p>
          <h1 className="font-semibold text-xl">Customer satisfaction</h1>
        </div>
        <div className="w-full lg:w-1/4 flex mb-4 lg:mb-0 flex-col items-center m-auto ">
          <p className="animate-pulse text-5xl lg:text-4xl text-[#257221] font-bold">8+</p>
          <h1 className="font-semibold text-xl">States</h1>
        </div>
        <div className="w-full lg:w-1/4 flex mb-4 lg:mb-0 flex-col items-center m-auto ">
          <p className="animate-pulse text-5xl lg:text-4xl text-[#257221] font-bold">4k+</p>
          <h1 className="font-semibold text-xl">Cakes</h1>
        </div>
      </div>
    </div>
  );
}
