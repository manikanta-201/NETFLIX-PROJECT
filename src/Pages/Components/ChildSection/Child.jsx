import React from 'react'
import  childImg from "../../../ASSETS/childern1.png"
const Child = () => {
    return (
        <div className="mobile-section">
          <div className="mobile-section1">
            <div className="background-img">
              <img src={childImg} alt="" className="img-background1" />
            </div>
    
           
          </div>
    
          <div className="mobile-section2">
            <div className="mobile-section2-1">
              <h1>Create profiles forkids</h1>
              <p>Save your favourites easily and always have something to watch.</p>
            </div>
          </div>
        </div>
      );
}

export default Child