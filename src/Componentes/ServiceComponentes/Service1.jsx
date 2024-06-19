import React, { useEffect, useState } from "react";
import {
  CorporateServices,
  PrivateServices,
  WeddingServices,
} from "../../Data/Services";
import { useLocation } from "react-router-dom";
import img1 from "../../assets/customparty.webp";
import ServiceDropdown from "./ServiceDropdown";

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
  }, [serviceName]);

  return (
    <div className="container m-auto mt-20">

      <div>
         <ServiceDropdown serviceName={serviceName}/>
      </div>
      <div className="flex flex-wrap justify-between mt-20">
        <div className="w-full lg:w-[50%]">
          <h2 className=" rubik-font  text-3xl mt-6">
            {data.heading}
          </h2>
          <p className="mt-6 text-xl">
            {data.detail}
          </p>
           
        </div>
        <div className="w-full lg:w-[40%]">
          <img alt="slider" src={data.mainimg} />
        </div>
      </div>
      <p className="rubik-font text-2xl mt-20">
        Explore Dancing Leaf Events Services: {data.name}
      </p>
      <div className=" mt-10  justify-between flex flex-wrap overflow-x-hidden">
        {data &&
          data.services.map((item, index) => (
            <div className="w-[30%] shadow-lg mb-6   ">
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
