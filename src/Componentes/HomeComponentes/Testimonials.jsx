import React from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/client-circle.png";
import stars from "../../assets/stars.png";
import cornerimg from "../../assets/corner1.png";

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
    <div> 
      <div
        class="elfsight-app-ad1b6999-e003-4318-b3d1-90c88b8df55a"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
