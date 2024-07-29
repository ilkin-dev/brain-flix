import React from 'react';
import './Button.css';

const Button = ({ className, icon, text }) => {
  let newClassName = "";
  if (className)
    newClassName = className + " button labels-buttons";
  else
    newClassName = " button labels-buttons";
  return (
    <button className={newClassName}>
      <img className='button__img' src={icon}></img>
      <div className='button__text'>
        <p>{text}</p>
      </div>
    </button>
  );
};

export default Button;
