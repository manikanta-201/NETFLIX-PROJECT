import React from "react";
import "./Mobile.css";
import Mobil1Img from "../../../ASSETS/mobile1.jpg";
import mobil2Img from "../../../ASSETS/mobil2.png";
import mobil3Img from "../../../ASSETS/mobile3.gif";
const Mobil = () => {
  return (
    <div className="mobile-section">
      <div className="mobile-section1">
        <div className="background-img">
          <img src={Mobil1Img} alt="" className="img-background1" />
        </div>

        <div className="mobile-se1">
          <div className="mani">
            <img src={mobil2Img} className="mani1" />
          </div>
          <div className="manikanta">
            <div className="mani2">
              <h4>Stranger </h4>
              <h4>Things</h4>
              <p>Downloading...</p>
            </div>
          </div>
          <div className="mani4">
            <img src={mobil3Img} className="mani5" />
          </div>
        </div>
      </div>

      <div className="mobile-section2">
        <div className="mobile-section2-1">
          <h2>Download your  shows to watch offline</h2>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  );
};

export default Mobil;
