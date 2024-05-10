import React from "react";
import flower1 from "../../assets/flower1.png";
import tree1 from "../../assets/tree-l.png";
import tree2 from "../../assets//tree-r.png";

export default function Section1({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <img alt="flowe" src={flower1} />
      <div className="flex">
        <div>
          <img alt="images" src={tree1} />
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#9d1f60] text-center">
            About us
          </h3>
          <p className="container px-4 lg:px-32 text-[23px] font-bold text-[#084943]  py-[21px] text-center ">
            We are a dedicated team of event organizers, passionate about
            creating memorable experiences. With a focus on detail and customer
            satisfaction, we strive to make every event unique and
            unforgettable. Trust us to turn your vision into reality.
          </p>
        </div>
        <div>
          <img alt="images"  src={tree2} />
        </div>
      </div>
    </div>
  );
}
