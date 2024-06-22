import React, { useEffect, useState } from "react";
import {
  CorporateServices,
  PrivateServices,
  WeddingServices,
} from "../../Data/Services";
import { useLocation } from "react-router-dom";
import img1 from "../../assets/customparty.webp";
import ServiceDropdown from "./ServiceDropdown";
import banner from "../../assets/privateparty.jpg";

export default function Service1() {
  const [data, setData] = useState(PrivateServices);
  const location = useLocation();
  const serviceName = new URLSearchParams(location.search).get("service");

  useEffect(() => {
    if (serviceName === "corporate") {
      setData(CorporateServices);
    } else if (serviceName === "wedding") {
      setData(WeddingServices);
    } else {
      setData(PrivateServices);
    }
    window.scrollTo(0, 0);
  }, [serviceName]);

  return (
    <div className="container m-auto mt-40 px-4 overflow-hidden">
      <div
        className="relative  flex justify-center align-center items-center h-[45vh] bg-cover"
        style={{
          backgroundImage: `url(${data.banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full  bg-[#0000007a] justify-center align-center items-center flex">
          <p className="text-center font-semibold text-white text-5xl md:text-6xl">
            {data.name}
          </p>
        </div>
      </div>
      <div>
        <ServiceDropdown serviceName={serviceName} />
      </div>
      <div className="container m-auto mt-10">
        <div class="bg-[#ced3ff3d]">
          <div class="  flex flex-wrap  mx-auto px-4   pt-10 lg:pt-16 pb-16">
            <div className="w-full items-center  px-4 lg:px-10 lg:w-[65%] flex flex-col">
              <h1 class="font-semibold text-black text-4xl md:text-5xl">
                {data.heading}
              </h1>
              <div class="max-w-4xl">
                <p class="mt-5 text-black text-lg text-justify">{data.detail}</p>
              </div>
            </div>
            <div  className="w-full lg:w-[35%]">
              <img alt="imag" src={data.mainimg}/>
            </div>
          </div>
        </div>
      </div>
      <p className="rubik-font text-2xl mt-20">
        Explore Dancing Leaf Events Services: {data.name}
      </p>
      <div className=" mt-10   lg:gap-[5%] flex flex-wrap overflow-x-hidden">
        {data &&
          data.services.map((item, index) => (
            <div className="w-1/2 lg:w-[30%] shadow-lg mb-6   ">
              <img
                alt="imgg"
                src={item.image}
                className="w-[95%] m-auto  cover"
              />
              <p className="text-center py-3 rubik-font text-xl bg-gray-200">
                {item.heading}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
