import React from "react";
import Banner from "../Componentes/ServiceComponentes/Banner";
import Service1 from "../Componentes/ServiceComponentes/Service1";
import bg1 from "../assets/bg-valvet.jpg";

export default function ServicePage() {
  return (
    <div >
      <Banner />
      <Service1 />
      <div
        style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}
        className="container flex flex-wrap  items-center justify-center justify-around py-6 m-auto bg-black text-white w-[95%] lg:w-[50%] rounded-lg  lg:rounded-full"
      >
        <div>
          <p>Need items for your parties ?</p>
          <p className="text-lg">We have a wide range of rental items.</p>
        </div>
        <button class="mt-4 cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[20px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          View
        </button>
      </div>
    </div>
  );
}
