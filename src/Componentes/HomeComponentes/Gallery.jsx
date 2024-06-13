import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    slidesToShow: 4,
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
    {
      id: 7,
      title: "Themed Parties",
      image: require("../../assets/rent-5.jpg"),
    },
    {
      id: 7,
      title: "Themed Parties",
      image: require("../../assets/themed.webp"),
    },
    {
      id: 7,
      title: "Themed Parties",
      image: require("../../assets/midnight.jpg"),
    },
    {
      id: 7,
      title: "Themed Parties",
      image: require("../../assets/customparty.webp"),
    },
    {
      id: 7,
      title: "Themed Parties",
      image: require("../../assets/house-warmimg.jpg"),
    },
    {
      id: 7,
      title: "Themed Parties",
      image: require("../../assets/banner3.jpg"),
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className="py-16 lg:pt-12" ref={ref}>
      <p className="text-4xl font-bold text-[#9d1f60] text-center mb-1">
        Portfolio
      </p>
      <div className="h-[4px] rounded-full w-[60px] m-auto bg-black mb-6"></div>
      {/*<div className="slider-container  w-[90%] m-auto shadow-inner ">
        <Slider {...settings}>
          {data &&
            data.map((item, index) => (
              <motion.div
                ref={animationRef}
                animate={{
                  scale: isVisible ? 1 : 0,
                  opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="p-2"
              >
                <img
                  alt="images"
                  src={item.image}
                  className="h-[200px] ml-4 w-full rounded-lg"
                  loading="lazy"
                />
              </motion.div>
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
              <motion.div
                ref={animationRef}
                animate={{
                  scale: isVisible ? 1 : 0,
                  opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="p-2"
              >
                <img
                  alt="images"
                  src={item.image}
                  className="h-[300px] ml-4 w-full rounded-lg"
                />
              </motion.div>
            ))}
        </Slider>
          </div> */} 
      <div className="columns-1 gap-5 container m-auto sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {data &&
          data.map((item, index) => (
            <img alt="img1" src={item.image} className="rounded-[30px]" />
          ))}
      </div>
    </div>
  );
}

export default Gallery;
