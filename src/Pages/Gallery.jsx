import React from "react";
import bg1 from "../assets/gallery-bg1.jpg";
import bg2 from "../assets/coloer-1-bg.jpg";
import { GalleryData } from "../Data/GalleryData";

export default function Gallery() {
  return (
    <div className="px-4 ">
       
      <div
        className="py-6 bg-fixed bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg2})` }}
      >
      <div className="columns-1 px-4 mt-40 gap-5 container m-auto sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {GalleryData &&
            GalleryData.map((item, index) => (
              <div className="p-2  bg-gray-300 rounded-lg mb-2 ">
                <img
                  alt="img1"
                  src={item.image}
                  className={`  hover:w3-animate-top	    rounded-lg  transition-transform duration-300  ease-in-out ${
                    (index + 2) % 2 === 0
                      ? "hover:-rotate-2  "
                      : "hover:rotate-2 "
                  }  `}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
