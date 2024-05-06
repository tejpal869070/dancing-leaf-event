import React from "react";
import "./service.css"

export default function Services() {
  const data = [
    {
      id: 1,
      title: "Birthday Parties",
      image: require("../../assets/birthday.jpg"),
    },
    {
      id: 2,
      title: "Corporate Parties",
      image: require("../../assets/corporate.webp"),
    },
    {
      id: 3,
      title: "Holiday Parties",
      image: require("../../assets/img2.jpg"),
    },
    {
      id: 4,
      title: "Charity Parties",
      image: require("../../assets/charity.jpg"),
    },
    {
      id: 5,
      title: "Wedding Ceremonies",
      image: require("../../assets/wedding.jpg"),
    },
    {
      id: 6,
      title: "Themed Parties",
      image: require("../../assets/themed.webp"),
    },
  ];

  return (
    <div
      className="py-6 mt-4"
      
    >
      <h1 className="text-4xl font-bold text-[#9d1f60] text-center mb-8">Our Services</h1>
      <div className="container m-auto">
        <div className="flex flex-wrap  flex-row mt-6  justify-around items-center">
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                className="relative mb-6 zoomed-in   w-[90%] lg:w-[28%] h-[300px] bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 poetsen-one-regular text-center bg-[#ffffffba] text-[25px] font-bold text-[#9d1f60] py-4 rounded-b-lg m-auto w-full" style={{boxShadow:`0 11px -4px rgba(255, 255, 255, 0.5)`}}>
                    <p> {item.title} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
