import React, { Children } from "react";

import HOME from "../../ASSETS/net.webp"
import "../HOMEpages/Homepage.css";
import Hero from "../Components/Herosection/Hero";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/AboutSection/About";
import Mobil from "../Components/MobilSection/Mobil";
import Movie from "../Components/MovieSection/Movie";
import Child from "../Components/ChildSection/Child";
import Faq from "../Components/FaqSection/Faq"
import  Footer from "../Components/FooterSection/Footer"
const Homepage = () => {
  return (
    <>
      <div className="home-img">
        <img src={HOME} alt="" className="img-background" />
      </div>
      <div className="hero">
        <Navbar></Navbar>
        <Hero />
      </div>
      <div className="about-sec">
        <About></About>
      </div>

      <div className="mobil-section">
        <Mobil />
      </div>
      <div className="movie-section">
        < Movie/>
      </div>
      <div className="child-section">
        <Child/>
      </div>

{/* faq */}

<div className="faq-section">
  <Faq/>
</div>

<div className="footer-section">
  < Footer/>
</div>


     
    </>
  );
};

export default Homepage;
