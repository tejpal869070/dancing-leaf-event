import "./service.css";
import bar from "../../assets/bar.png";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Services({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className="py-6 mt-6 ">
      <h1 className="text-4xl font-bold text-[#9d1f60] text-center mb-8">
        Our Services
      </h1>
      <div className="container m-auto ">
        <div
          className="flex flex-wrap  flex-row mt-6  justify-around items-center"
          ref={ref}
        >
          {data &&
            data.map((item, index) => (
              <motion.div
                ref={animationRef}
                initial={{
                  x: index % 2 === 0 ? -100 : 100, 
                  opacity: 0,
                }}
                animate={{
                  x: isVisible ? 1 : 1, 
                  opacity: isVisible ? 1 : 1,
                }}
                transition={{ duration: 1.2 }}
                key={index}
                id="HomeServiceCard"
                className="relative mb-6 zoomed-in card  w-[90%] lg:w-[28%] h-[300px] bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                }}
              >
                <div
                  id="HomeServiceCardInner"
                  className="  absolute w-full h-full poetsen-one-regular text-center bg-[#00000036] flex flex-col justify-center items-center text-[25px] font-bold text-[#9d1f60] py-4 rounded-b-lg m-auto w-full"
                >
                  <p
                    className="text-[white]"
                    style={{ textShadow: "1px 0px 9px  black" }}
                  >
                    {item.title}
                  </p>
                  <img
                    alt="bar"
                    src={bar}
                    style={{ filter: "drop-shadow(2px 4px 6px black)" }}
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
