import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Toaster } from "react-hot-toast";
import { Link } from 'react-router-dom';


import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Product_Details from "./pages/Product_Details";

function App() {
  useEffect(() => {
    const preloader = document.querySelector("#preloader");
    if (!preloader) return;
  
    const removePreloader = () => preloader.remove();
    if (document.readyState === "complete") {
      removePreloader();
    } else {
      window.addEventListener("load", removePreloader);
    }
  
    return () => window.removeEventListener("load", removePreloader);
  }, []);
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div id="preloader" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products-details/:id" element={<Product_Details/>} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
