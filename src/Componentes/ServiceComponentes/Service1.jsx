import React from "react";

export default function Service1() {
  const data = [
    {
      id: 1,
      heading: "Baby shower",
      image: require("../../assets/baby.jpg"),
      desc: "Get ready to welcome your bundle of joy with our charming custom cakes and delightful decorations tailored just for baby showers! Let us make your celebration extra special with our adorable themes and party favors. ",
    },
    {
      id: 2,
      heading: "Birthday Party",
      image: require("../../assets/birthday-2.jpg"),
      desc: "Elevate any birthday celebration with our personalized decorations and delectable custom cakes! Whether you're turning one or one hundred, our themed balloons and party favors will make your special day truly memorable.",
    },
    {
      id: 3,
      heading: "Corporate Parties",
      image: require("../../assets/corporate-2.jpg"),
      desc: "Transform your corporate event into an unforgettable experience with our expertly crafted decorations and delicious custom cakes! From elegant themes to branded party favors, we'll ensure your gathering is a resounding success.",
    },
    {
      id: 4,
      heading: "Customized cakes",
      image: require("../../assets/cake2.webp"),
      desc: "Indulge in the sweetest treat with our made-to-order custom cakes! From intricate designs to mouthwatering flavors, each cake is crafted to perfection, just for you. ",
    },
  ];
  return (
    <div className="  w-[100vw] overflow-x-hidden">
      {data &&
        data.map((item, index) => (
          <div
          id="service-card"
            className={`container  relative py-6  m-auto  flex flex-wrap items-center  justify-center ${
              (index + 2) % 2 === 0 ? "w3-animate-left" : "flex-row-reverse w3-animate-right"
            }`}
          >
            <div className="w-full  lg:w-[30%]  flex flex-col px-4 ">
              <p className="norican-regular text-5xl text-[#9d1f60]">
                {item.heading}
              </p>
              <p className="mt-6 text-lg font-thin poetsen-one-regular ">
                {item.desc}
              </p>
            </div>
            <div
              className={`w-full p-2 lg:p-0 lg:w-[48%] flex  ${
                (index + 2) % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
              }`}
            >
              <img
                alt="imagd"
                src={item.image}
                className="w-[95%] hover:animate-bounce lg:w-[80%] rounded-[20px]  lg:rounded-[50px] "
              />
            </div>
          </div>
        ))}
    </div>
  );
}
