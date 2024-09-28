import React from "react";
import "./Feature.css";
import feature1 from "../../assets/xmm-icon1.png";
import feature2 from "../../assets/xmm-icon2.png";
import feature3 from "../../assets/xmm-icon3.png";

const Feature = () => {
  return (
    <div className="features">
      <div className="features-left">
        <h2>Features Of X MARKET MAKER</h2>
        <p>
          x market maker offers a comprihensive set of features tailord for
          market participations. its core functionalities include real-time
          pricing liquidity
        </p>
      </div>

      <div className="features-grid">
        <div className="feature">
          <h3>Benefits For Holders</h3>
          <img src={feature1} alt="Benefit For Holders" />

          <p>
            We aim to increase the value of our currency to benefit our
            community. market making will be key focus. we aim to increase the
            valiue of our currency to benifit our community
          </p>
        </div>
        <div className="feature">
          <h3>Biggest Community</h3>
          <img src={feature2} alt="Biggest Community" />

          <p>
            XMM is the First ever Crypto with the market making objective that
            being worked upon at such amazing level! we will focus on commuunity
            building a lot for that
          </p>
        </div>
        <div className="feature">
          <h3>Ecosystem - Redefined</h3>
          <img src={feature3} alt="Ecosystem Redefined" />

          <p>
            Our powerful token will protect our holders from the turbulence of
            the crypto market and help them hold deposite the uncertainity of
            the market
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
