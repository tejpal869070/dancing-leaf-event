import { HomePageDummyData } from "../../Data/HomePage";
import "./service.css"; 
import React  from "react"; 

export default function Services( ) {
   
  return (
    <div className="py-6 container m-auto">
      <h1 className="text-center text-4xl rubik-font  ">Our Services</h1>
      <div className="flex flex-wrap justify-between justify-center mb-4 mt-6 w-full px-2">
        {HomePageDummyData &&
          HomePageDummyData.map((item, index) => (
            <div key={index} className="w-full md:w-[48%] lg:w-[31%] mb-10">
              <div
              >
                <div className="border-2  relative   p-1 rounded-lg shadow-lg h-60 overflow-hidden">
                  <img
                    alt="servie"
                    src={item.image}
                    className=" h-full w-full   object-cover	"
                  />
                  <div className="absolute      align-center  justify-center w-[90%] h-[90%] m-auto inset-0 p-2 text border-4" />
                </div>
                <p className="text-center  courgette-regular mt-2 text-2xl">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
      </div>

       
    </div>
  );
}
