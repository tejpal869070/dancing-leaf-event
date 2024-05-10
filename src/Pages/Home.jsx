import React, { useEffect, useState } from "react";
import Hero1 from "../Componentes/HomeComponentes/Hero1";
import Section1 from "../Componentes/HomeComponentes/Section1";
import Services from "../Componentes/HomeComponentes/Services";
import Video from "../Componentes/HomeComponentes/Video";
import Cake from "../Componentes/HomeComponentes/Cake";
import Gallery from "../Componentes/HomeComponentes/Gallery";
import { HomePageData } from "../Controller/api";
import { HomePageDummyData } from "../Data/HomePage";
import Counter from "../Componentes/HomeComponentes/Counter";
import Testimonials from "../Componentes/HomeComponentes/Testimonials";

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
      <Section1 data={data} />
      <Counter />
      <Services data={data} />
      <Cake />
      <Testimonials/>
      <Gallery />
      <Video />
    </div>
  );
}
