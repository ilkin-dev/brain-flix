import React from 'react';
import './Button.css';

const Button = ({ icon, text }) => {
  return (
    <button className='button labels-buttons'>
      <img className='button__img' src={icon}></img>
      <p className='button__text'>{text}</p>
    </button>
  );
};

export default Button;
