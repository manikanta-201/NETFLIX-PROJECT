import React from 'react'
import './Movie.css'
import tvimgframe from "../../../ASSETS/movieImg1.png";
import vediof from "../../../ASSETS/movie2.m4v";

const Movie = () => {
    return (
        <div className="about-section-one">
          <div className="about-section-two">
            <div className="about-section-two-h2">
              <h2>Watch everywhere</h2>
             
            </div>
            <div className="about-sectio-two-p">
            <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
          </div>
          <div className="about-section-three">
            <div className="about-section-three-1">
              <img src={tvimgframe} alt="tvframe" />
            </div>
            <div className="about-section-three-2" >
              <div className="about-section-three-3"  >
               <video controls loop autoPlay id='movie7' >
  
                <source src={vediof} type="video/mp4" />
               </video>
               
              </div>
            </div>
          </div>
        </div>
    );
}

export default Movie