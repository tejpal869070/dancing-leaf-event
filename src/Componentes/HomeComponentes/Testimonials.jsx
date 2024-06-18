import React from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/client-circle.png";
import stars from "../../assets/stars.png";
import cornerimg from "../../assets/corner1.png"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      description:
        "With amazing decoration and lighting and delicious cake Dancing leaf made my birthday memoriable.",
      title: "Birthday Parties",
      image: require("../../assets/birthday.jpg"),
    },
    {
      id: 2,
      description:
        "With amazing decoration and lighting and delicious cake Dancing leaf made my birthday memoriable.",
      title: "Corporate Parties",
      image: require("../../assets/corporate.webp"),
    },
    {
      id: 3,
      description:
        "With amazing decoration and lighting and delicious cake Dancing leaf made my birthday memoriable.",
      title: "Holiday Parties",
      image: require("../../assets/img2.jpg"),
    },
    {
      id: 4,
      description:
        "With amazing decoration and lighting and delicious cake Dancing leaf made my birthday memoriable.",
      title: "Charity Parties",
      image: require("../../assets/charity.jpg"),
    },
    {
      id: 5,
      description:
        "With amazing decoration and lighting and delicious cake Dancing leaf made my birthday memoriable.",
      title: "Wedding Ceremonies",
      image: require("../../assets/wedding.jpg"),
    },
    {
      id: 6,
      description:
        "With amazing decoration and lighting and delicious cake Dancing leaf made my birthday memoriable.",
      title: "Themed Parties",
      image: require("../../assets/themed.webp"),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden overflow-y-hidden relative rounded-lg  bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 mt-4 container   m-auto flex flex-col lg:flex-row lg:space-x-8">
      <div className="relative flex items-center justify-center  text-white p-4 rounded-lg w-full lg:w-[48%] mb-4 lg:mb-0">
        <img alt="circle" src={img1} className="animate-pulse"/>
        <div className="text-[black] norican-regular absolute text-5xl font-bold word-wrap">
          What our <br /> clients says
        </div>
      </div>
      <div className="w-full lg:w-[50%] py-2  slider-container  m-auto">
        <Slider {...settings}>
          {data &&
            data.map((item, index) => (
              <div className="flex  w-full text-center flex-col items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 mb-6 w-20 rounded-full m-auto"
                />
                <h1 className="text-2xl font-normal w-[80%] text-black courgette-regular text-center m-auto "> {item.description} </h1>
                <img src={stars} alt={item.title} className="h-16 m-auto" />
              </div>
            ))}
        </Slider>
      </div>

      <div className="w-40 absolute top-0 right-0">
            <img alt="corner" src={cornerimg}/>
      </div>
      <div className="w-40 absolute bottom-0 right-0 rotate-90">
            <img alt="corner" src={cornerimg} />
      </div>
    </div>
  );
}
