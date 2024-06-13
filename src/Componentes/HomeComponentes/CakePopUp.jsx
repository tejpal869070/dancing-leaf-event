import React from "react";
import { GiCancel } from "react-icons/gi";
import Slider from "react-slick";

export default function CakePopUp({ onClose }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
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

  const data = [
    {
      id: 1,
      title: "Birthday Parties",
      image: require("../../assets/cake8.webp"),
    },
    {
      id: 2,
      title: "Corporate Parties",
      image: require("../../assets/cake2.webp"),
    },
    {
      id: 3,
      title: "Holiday Parties",
      image: require("../../assets/cake.png"),
    },
    {
      id: 4,
      title: "Charity Parties",
      image: require("../../assets/cake4.png"),
    },
    {
      id: 5,
      title: "Wedding Ceremonies",
      image: require("../../assets/cake7.png"),
    },
    {
      id: 6,
      title: "Themed Parties",
      image: require("../../assets/cake6.webp"),
    },
  ];
  return (
    <div className="z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <div
          onClick={onClose}
          className=" flex justify-end text-gray-600 hover:text-gray-900"
        >
          <GiCancel size={20} color="black" className="cursor-pointer" />{" "}
        </div>
        <div className="slider-container  w-[60vw] m-auto shadow-inner ">
          <Slider {...settings}>
            {data &&
              data.map((item, index) => (
                <div className="p-2">
                  <img
                    alt="images"
                    src={item.image}
                    className="h-[200px] ml-4 w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
              ))}
          </Slider>
        </div>
        <a href="tel:+16693508979"
          className=" cursor-pointer relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">Order Now !</span>
        </a>
      </div>
    </div>
  );
}
