import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <h2>Questions? cell 000-800-919-1694</h2>

        <div className="row">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>

          <div className="col">
            <a href="#">Help Centre</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>

          <div className="col">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>

          <div className="col">
            <a href="#">Terms of Use</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <button className='english'>English</button>

        <p className="copyritght-text">Netflix India</p>

        



      </div>
    </>
  );
};

export default Footer;
