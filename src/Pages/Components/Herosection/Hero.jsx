import React from "react";
import "./Hero.css";
import img from "../../../ASSETS/netflix.jpg"
const Hero = () => {
  return (
    <>
      <div className="herosection">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="asd">
          
          <input
            type="text"
            placeholder="emil addrees"
            className="inputfield"
          />
          <button className="getstarte"> Get Starte</button>
        </div>
      </div>
     

      
    </>
  );
};

export default Hero;
