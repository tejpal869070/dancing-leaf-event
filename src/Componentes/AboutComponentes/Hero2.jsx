import React from "react";
import bg1 from "../../assets/bg-5.jpg";

export default function Hero2() {
  return (
    <div>
      <div
        className="  w-full  "
        style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}
      >
        <div className="py-12 w-full h-full bg-[#ffd7eab0] left-0  right-0 flex flex-col justify-center items-center align-center">
          <h1 className="text-center text-[#9d1f60]  font-bold text-6xl norican-regular" style={{textShadow:"4px 4px 4px white"}}>
            Who we are and what we do !
          </h1>
          <p className=" px-2 lg:px-0 mt-6 text-center text-xl text-[#084943] font-semibold" style={{textShadow:"4px 4px 4px white"}}>
            At our event management business, we're here to make your special <br/>
            occasions truly memorable. We excel at creating unique decorations <br/>
            that add magic to any event, whether it's a birthday party or a <br/>
            corporate gathering. Our custom-made cakes are not just delicious <br/>
            treats; they're works of art tailored to your preferences, adding a <br/>
            personal touch to your celebration. Alongside our decoration and <br/>
            cake services, we also offer a wide range of rental items, from <br/>
            practical tables and chairs to fun props, ensuring every detail of <br/>
            your event is taken care of. Whether you're planning a fairy-tale <br/>
            wedding or a themed party, our team is committed to turning your <br/>
            ideas into reality, making your event a standout success.
          </p>
        </div>
      </div>
    </div>
  );
}
