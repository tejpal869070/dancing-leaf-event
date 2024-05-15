import React from "react";
import maam3 from "../../assets/maam3.webp";
import bg1 from "../../assets/homebg.jpg"

export default function AboutHero1() {
  return (
    <div className=" relative m-auto bg-fixed bg-cover pt-6" style={{backgroundImage:`url(${bg1})`}}>
      <div className="flex container m-auto flex-wrap-reverse bg-[#f5f5f561]   items-center justify-around justify-center py-6">
        <div className=" relative py-12 lg:px-20 w-full lg:w-[60%] m-auto   flex flex-col items-center justify-center">
          <p className="text-4xl font-bold norican-regular text-left text-[#9d1f60] ">Saloni Mishra</p>
          <p className="mt-4 text-lg font-semibold">Entrepreneur</p>
          <p className="font-[sans-serif] font-medium text-xl mt-4 px-2">
            We are a dedicated to organising events & parties , passionate about
            creating memorable experiences. With a focus on detail and customer
            satisfaction, we strive to make every event unique and
            unforgettable. Trust us to turn your vision into reality.
          </p>
        </div>
        <div className="w-full lg:w-[40%] m-auto  ">
          <img alt="maa3" src={maam3} className="w-[60%] m-auto" />
        </div>
      </div>
      
      <div className="w-[60vw] border-b-4 border-black h-1 rounded-full m-auto mt-6"></div>
    </div>
  );
}
