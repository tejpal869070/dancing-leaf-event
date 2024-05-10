import React, { useState, useEffect } from "react";

const AnimatedHeadings = () => {
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prevHeading) => {
        if (prevHeading === 4) {
          return 0;
        } else {
          return prevHeading + 1;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const headings = [
    "Event Decoration",
    "Custom Cakes",
    "Rental Items",
    "Coordination and Planning",
    "Photography and Videography",
  ];

  return (
    <div>
      {headings.map((heading, index) => (
        <h1
          key={index}
          className={`text-5xl text-center lg:text-8xl norican-regular text-[#9d1f60] font-bold ${
            currentHeading === index ? "w3-animate-opacity" : "w3-animate-zoom"
          }`}
          style={{
            display: currentHeading === index ? "block" : "none",
            textShadow: "2px 6px 11px #f9f9f9",
          }}
        >
          {heading}
        </h1>
      ))}
    </div>
  );
};

export default AnimatedHeadings;
