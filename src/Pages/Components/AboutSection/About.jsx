import React from "react";
import "./About.css";

import tvimgframe from "../../../ASSETS/tvframe.png";
import vediof from "../../../ASSETS/vediok.mp4";

const About = () => {
  return (
      <div className="about-section-one">
        <div className="about-section-two">
          <div className="about-section-two-h2">
            <h2>Enjoy on your TV</h2>
           
          </div>
          <div className="about-sectio-two-p">
          <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
        </div>
        <div className="about-section-three">
          <div className="about-section-three-1">
            <img src={tvimgframe} alt="tvframe" />
          </div>
          <div className="about-section-three-2">
            <div className="about-section-three-3" >
             <video src={vediof} controls autoplay  type = "video/mp4"></video>
             
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
