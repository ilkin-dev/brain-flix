import React from 'react';
import './Logo.css';

import logoImage from "../../assets/logo/BrainFlix-logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt='Logo Image'></img>
    </div>
  );
};

export default Logo;
