import React from "react";
import "./Header.css"; 
import logo from '../../assets/xmm-logo.png'; // Logo image

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
      <button className="buy-token">Buy Token</button>
    
    </div>
  );
};

export default Header;
