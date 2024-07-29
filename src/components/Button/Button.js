import React from 'react';
import './Button.css';

const Button = ({ className, buttonStyleType = 'button-1', type, icon, text, onClick }) => {
  let newClassName = "";
  newClassName = className + ' ' + buttonStyleType + " button labels-buttons";

  return (
    <button
      type={type} className={newClassName} onClick={onClick} >
      <img className='button__img' src={icon}></img>
      <div className='button__text'>
        <p className=' labels-button'>{text}</p>
      </div>
    </button >
  );
};

export default Button;
