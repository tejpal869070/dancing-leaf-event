import React, { useEffect, useState } from "react";
import Hero1 from "../Componentes/HomeComponentes/Hero1";
import Services from "../Componentes/HomeComponentes/Services"; 
import Cake from "../Componentes/HomeComponentes/Cake";
import Gallery from "../Componentes/HomeComponentes/Gallery";
import { HomePageData } from "../Controller/api";
import { HomePageDummyData } from "../Data/HomePage";
import Testimonials from "../Componentes/HomeComponentes/Testimonials";
import Instagram from "../Componentes/HomeComponentes/Instagram"; 
import AboutUsHome from "../Componentes/HomeComponentes/AboutUsHome";
import bg1 from "../assets/flowerbg.png"

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const PageData = async () => {
      try {
        const response = await HomePageData();
        setData(response.data);
      } catch (error) {
        setData(HomePageDummyData);
      }
    };

    PageData();
  }, []);

  return (
    <div className="scroll-smooth bg-fixed bg-cover bg-[#fff3f3]"   style={{backgroundImage:`url(${bg1})`}}>
      <Hero1 /> 
      <AboutUsHome/>
      <Services   />
      <Cake />
      <Instagram />
      <Gallery />
      <Testimonials /> 
      <div className="p-5 sm:p-8"></div>
    </div>
  );
}
