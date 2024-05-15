import React from "react";

export default function Service1() {
  const data = [
    {
      id: 2,
      heading: "Birthday Party",
      image: require("../../assets/birthday-2.jpg"),
      desc: "Elevate any birthday celebration with our personalized decorations and delectable custom cakes! Whether you're turning one or one hundred, our themed balloons and party favors will make your special day truly memorable.",
    },
    {
      id: 1,
      heading: "Baby shower",
      image: require("../../assets/baby.jpg"),
      desc: "Get ready to welcome your bundle of joy with our charming custom cakes and delightful decorations tailored just for baby showers! Let us make your celebration extra special with our adorable themes and party favors. ",
    },
    {
      id: 3,
      heading: "Gender Reveal",
      image: require("../../assets/gender-reveal.jpg"),
      desc : "Make your gender reveal party an unforgettable event! Let us create a celebration filled with excitement and anticipation as you announce the newest addition to your family. With personalized touches and vibrant décor, it's a moment you'll cherish forever."
    },
    {
      id: 4,
      heading : "House warming",
      image : require("../../assets/house-warmimg.jpg"),
      desc : "Welcome to your new home in style! Our housewarming events are designed to celebrate this exciting milestone with warmth and elegance. From inviting décor to delicious catering, let us create an unforgettable gathering as you embark on this new chapter of your life."
    },
    {
      id: 3,
      heading: "Corporate Parties",
      image: require("../../assets/corporate-2.jpg"),
      desc: "Transform your corporate event into an unforgettable experience with our expertly crafted decorations and delicious custom cakes! From elegant themes to branded party favors, we'll ensure your gathering is a resounding success.",
    },
    {
      id: 4,
      heading: "Theme Picnic",
      image: require("../../assets/themeparty.jpg"),
      desc : "Step into a world of imagination with our themed parties! From elegant masquerades to lively tropical fiestas, we bring your vision to life with creative décor, entertainment, and cuisine. Let us transform your event into an unforgettable experience filled with excitement and wonder."
    },
    {
      id: 5,
      heading: "Wedding Parties",
      image: require("../../assets/wedding-ser.jpeg"),
      desc : "Elevate your special day with our wedding party services! From intimate gatherings to grand celebrations, we tailor every detail to reflect your love story. With exquisite décor, delicious cuisine, and flawless coordination, let us create the wedding of your dreams, filled with joy and cherished memories."
    },
    {
      id: 6,
      heading: "Midnight Surprise",
      image: require("../../assets/midnight.jpg"),
      desc : "Add a dash of mystery and excitement to your celebrations with our Midnight Surprise events! Whether it's a birthday, anniversary, or special occasion, we specialize in orchestrating unforgettable surprises that unfold under the enchanting veil of the night sky."
    },
    {
      id: 7,
      heading: "Themed Events",
      image: require("../../assets/themeparty2.webp"),
      desc : "Embark on a journey of creativity and imagination with our themed events! From elegant galas to whimsical parties, we specialize in bringing your vision to life. With meticulous attention to detail and immersive decor."
    }
  ];
  return (
    <div className="  w-[100vw] overflow-x-hidden">
      {data &&
        data.map((item, index) => (
          <div
            id="service-card"
            className={`container  relative py-6  m-auto  flex flex-wrap items-center  justify-center ${
              (index + 2) % 2 === 0
                ? "w3-animate-left"
                : "flex-row-reverse w3-animate-right"
            }`}
          >
            <div className="w-full  lg:w-[30%]  flex flex-col px-4 ">
              <p className="norican-regular text-5xl text-[#9d1f60]">
                {item.heading}
              </p>
              <p className="mt-6 text-lg font-semibold  ">
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
                className="w-[95%]  lg:w-[80%] rounded-[20px] max-h-[400px]  lg:rounded-[50px] "
              />
            </div>
            <div className="border-b-4 border-[#4d4d4d]  w-[80%] mt-12 rounded-full"></div>
          </div>
        ))}
    </div>
  );
}
