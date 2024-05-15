import { rentalItems } from "../Data/RentalItems";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import corner from "../assets/corner-flower.png";
import bg10 from "../assets/bg-valvet.jpg";

const RentalItem = ({ item }) => {
  return (
    <div className="bg-[#ed5c648a]  lg:w-full rounded-b-lg overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[300px] p-1 transition-transform duration-300 transform scale-100 hover:scale-110"
      />
      <h2 className="pl-2 text-lg font-[500]">{item.name}</h2>
      <p className="pl-2 pb-1">${item.price}/day</p>
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
    <div>
      <div className="flex flex-wrap container m-auto pt-40" ref={ref}>
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
          w-full
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
            class="relative inline-block text-lg group mt-10"
          >
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-4 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative font-bold">Get Now !</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
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
