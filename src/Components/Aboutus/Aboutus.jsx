import React from "react";
import "./Aboutus.css";
import tick from "../../assets/xmm-tick.png";
import aboutImage from "../../assets/xmm-img1.png";
import arrowImage from "../../assets/arrow.png";

const Aboutus = () => {
  return (
    <div className="about-us">
     <div className="arrow-containerover">
<div className="arrow-container">
        <img src={arrowImage} alt="arrow" className="arrow-img" />
       
        </div>
     </div>
           
      

      <div className="about-image">
        <img src={aboutImage} alt="About Us Illustration" />
      </div>
      <div className="about-content">
        <h2>Best Ever Token Designed For Remarkable Success</h2>
        <p>
          The main advantage of supporting $XMM is the project is focused on
          creating Volume and Market Making through. XMM empowers businesses to
          create dynamic content target specific.
        </p>
        <div className="about-tags">
          <span>
            <img src={tick} alt="" />
            <p>Market</p>
          </span>
          <span>
            <img src={tick} alt="" />
            <p>Volume</p>
          </span>
          <span>
            <img src={tick} alt="" />
            <p>Trend</p>
          </span>
        </div>
        <button className="whitepaper-button">Read Whitepaper</button>
      </div>
    </div>
  );
};

export default Aboutus;
