import React from "react";
import Banner from "../Componentes/ServiceComponentes/Banner";
import Service1 from "../Componentes/ServiceComponentes/Service1";
// import bg10 from "../assets/bg-10.jpg";
import bg10 from "../assets/bg-valvet.jpg";
import corner from "../assets/corner-flower.png";
import img1 from "../assets/customparty.webp";
import { Link } from "react-router-dom";

export default function ServicePage() {
  return (
    <div>
      <Banner />
      <Service1 />
      <div className="container m-auto w-[95vw] lg:w-[70vw]">
        <div
          className=" bg-fixed relative py-12 px-6 flex flex-col items-center justify-center rounded-lg bg-gray-200 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bg10})` }}
        >
          <div className="w-full m-auto">
            <img alt="img2" src={img1} className="lg:w-[50%] m-auto mb-4" />
          </div>
          <h1 className="text-white poetsen-one-regular  text-3xl  text-center leading-10">
            If you're looking to organize a customized event or party, <br />{" "}
            just share your thoughts with us, <br /> and we'll make it a
            reality.
          </h1>
          <Link  to={"/contact"} class="relative inline-block text-lg group mt-10">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-4 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative font-bold">Get In Touch</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
          <img
            alt="cirner"
            className="absolute bottom-0 left-0 w-[200px]"
            src={corner}
          />
        </div>
      </div>
    </div>
  );
}
