import React from "react";
import flower1 from "../../assets/flower1.png";
import flower2 from "../../assets/flowe2.png";

export default function Section1() {
  return (
    <div className="flex flex-col items-center">
      <img alt="flowe" src={flower1} />
      <h3 className="text-4xl font-bold text-[#9d1f60]"> About us</h3>
      <p className="container px-4 lg:px-32 text-[23px] font-bold text-[#084943]  py-[21px] text-center w3-animate-bottom">
        We are a dedicated team of event organizers, passionate about creating
        memorable experiences. With a focus on detail and customer satisfaction,
        we strive to make every event unique and unforgettable. Trust us to turn
        your vision into reality.
      </p>
      <img alt="flowe" src={flower2} />
    </div>
  );
}
