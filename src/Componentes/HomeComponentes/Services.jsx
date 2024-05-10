import React from "react";
import "./service.css";
import bar from "../../assets/bar.png";

export default function Services({ data }) {
  return (
    <div className="py-6 mt-6">
      <h1 className="text-4xl font-bold text-[#9d1f60] text-center mb-8">
        Our Services
      </h1>
      <div className="container m-auto">
        <div className="flex flex-wrap  flex-row mt-6  justify-around items-center">
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                id="HomeServiceCard"
                className="  relative mb-6 zoomed-in card  w-[90%] lg:w-[28%] h-[300px] bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                }}
              >
                <div
                id="HomeServiceCardInner"
                  className="  absolute w-full h-full poetsen-one-regular text-center bg-[#00000036] flex flex-col justify-center items-center text-[25px] font-bold text-[#9d1f60] py-4 rounded-b-lg m-auto w-full"
                  // style={{ boxShadow: `0 11px -4px rgba(255, 255, 255, 0.5)` }}
                >
                  <p
                    className="text-[white]"
                    style={{ textShadow: "1px 0px 9px  black" }}
                  >
                    {item.title}
                  </p>
                  <img
                    alt="bar"
                    src={bar}
                    style={{ filter: "drop-shadow(2px 4px 6px black)" }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      
    </div>
  );
}
