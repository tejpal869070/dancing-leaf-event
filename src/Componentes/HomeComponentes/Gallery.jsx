import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
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
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
    rtl: true,
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
    <div className="py-16 lg:pt-12">
    <p className="text-4xl font-bold text-[#9d1f60] text-center mb-1">Portfolio</p>
    <div className="h-[4px] rounded-full w-[60px] m-auto bg-black mb-6"></div>
      <div className="slider-container  w-[90%] m-auto shadow-inner ">
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
      <div className="slider-container  w-[90%] m-auto shadow-inner ">
        <Slider
          {...settings2}
          className="bg-gradient-to-r from-white via-transparent to-transparent"
        >
          {data &&
            data.map((item, index) => (
              <div className="p-2">
                <img
                  alt="images"
                  src={item.image}
                  className="h-[200px] ml-4 w-full rounded-lg"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
