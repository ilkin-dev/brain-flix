import React from 'react';
import './Button.css';

const Button = ({ className, icon, text }) => {
  let newClassName = "";
  if (className)
    newClassName = { className } + " button labels-buttons";
  else
    newClassName = " button labels-buttons";
  return (
    <button className={newClassName}>
      <img className='button__img' src={icon}></img>
      <p className='button__text'>{text}</p>
    </button>
  );
};

export default Button;
