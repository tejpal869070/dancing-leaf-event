import "./App.css";
import Footer from "./Componentes/Footer";
import Header2 from "./Componentes/Header2";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ServicePage from "./Pages/Services";
import About from "./Pages/About";
import { useEffect } from "react";
import WhatsappIcon from "./Componentes/WhatsappIcon";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <Header2 />
      <ScrollToTop />
      <WhatsappIcon/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
