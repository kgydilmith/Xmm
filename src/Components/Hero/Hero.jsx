import React from "react";
import "./Hero.css";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import xmmhero from "../../assets/xmm-hero.png";
const Hero = () => {
  return (
<div className="heromain">
     <h1 className="herop">
        Marketing Makign
    </h1> 
<div className="hero">
    <div className="hero-text">
      <h1>WITH XMM.</h1>
      <p className="text1">
        XMM empowers businesses to create dynamic content, target specific
        demographics, and optimize their digital presence.
      </p>

      <button className="cta-button">Join Telegram</button>

      <img className="img1" src={user1} alt="" />
      <img className="img2" src={user2} alt="" />
      <img className="img3" src={user3} alt="" />

      <p className="text2">Our happy customers</p>
      <p className="text3">
        Our happy customers are at the heart of everything we do
      </p>
    </div>

    <div className="hero-image">
      <img src={xmmhero} alt="Marketing Graphic" />
    </div>
  </div>


</div>




    
  );
};

export default Hero;
