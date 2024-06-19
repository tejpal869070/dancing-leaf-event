import React, { useEffect, useState } from "react";
import Hero1 from "../Componentes/HomeComponentes/Hero1";
import Services from "../Componentes/HomeComponentes/Services";
import Video from "../Componentes/HomeComponentes/Video";
import Cake from "../Componentes/HomeComponentes/Cake";
import Gallery from "../Componentes/HomeComponentes/Gallery";
import { HomePageData } from "../Controller/api";
import { HomePageDummyData } from "../Data/HomePage";
import Testimonials from "../Componentes/HomeComponentes/Testimonials";
import Instagram from "../Componentes/HomeComponentes/Instagram";
import AboutHero1 from "../Componentes/AboutComponentes/AboutHero1";
import AboutUsHome from "../Componentes/HomeComponentes/AboutUsHome";

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
    <div className="scroll-smooth">
      <Hero1 />
      {/* <Section1 data={data} /> */}
      {/* <AboutHero1 /> */}
      {/* <Counter /> */}
      <AboutUsHome/>
      <Services data={data} />
      <Cake />
      <Testimonials />
      <Instagram />
      <Gallery />
       {/* <Video />  */}
      <div className="p-5 sm:p-8"></div>
    </div>
  );
}
