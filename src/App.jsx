import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer.jsx/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
    
   
      <div className="overflow-hidden">
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
