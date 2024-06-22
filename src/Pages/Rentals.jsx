import { rentalItems } from "../Data/RentalItems";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import corner from "../assets/corner-flower.png";
import bg10 from "../assets/bg-valvet.jpg";

const RentalItem = ({ item }) => {
  return (
    <div className="bg-[#ed5c648a]  lg:w-full rounded-b-lg rounded-b-xl overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[200px] lg:h-[300px] p-1 transition-transform duration-300 transform scale-100 hover:scale-110"
      />
      <h2 className="pl-2 text-lg text-center my-2 text-xl font-[500]">
        {item.name}
      </h2>
    </div>
  );
};

const Rentals = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="pt-40">
      <div className="container m-auto">
        <p className="text-black font-semibold text-center text-4xl md:text-4xl">
          Looking for items for your event ?
        </p>
        <p className="mt-4 text-center text-xl ">
          Enhance your event with our wide range of rental items. From elegant
          decor to essential equipment, we provide everything you need for a
          seamless and memorable occasion. Enjoy hassle-free rentals and
          exceptional service, making your event planning experience stress-free
          and successful.
        </p>
      </div>
      <div className="flex flex-wrap container m-auto mt-10" ref={ref}>
        {rentalItems.map((item, index) => (
          <motion.div
            ref={animationRef}
            animate={{
              scale: isVisible ? 1 : 1,
              opacity: isVisible ? 1 : 1,
            }}
            transition={{ duration: 0.8 }}
            key={index}
            className={`
          w-1/2
          sm:w-1/2
          md:w-1/3
          lg:w-1/4
          p-2
        `}
          >
            <RentalItem item={item} />
          </motion.div>
        ))}
      </div>
      <div className="container m-auto w-[96vw] lg:w-[70vw] mt-6">
        <div
          className=" bg-fixed relative py-12 px-6 flex flex-col items-center justify-center rounded-lg bg-gray-200 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bg10})` }}
        >
          <h1 className="text-white poetsen-one-regular  text-3xl  text-center leading-10">
            Transform any occasion with our party rentals. <br />
            Quality items for memorable celebrations. <br /> Rent today for your
            next event!
          </h1>
          <a
            href="tel:+16693508979"
            rel="noreferrer"
            target="_blank"
            className="relative inline-block text-lg group mt-10"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-4 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative font-bold">Get Now !</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
          <img
            alt="cirner"
            className="absolute bottom-0 left-0 w-[200px]"
            src={corner}
          />
        </div>
      </div>
    </div>
  );
};

export default Rentals;
