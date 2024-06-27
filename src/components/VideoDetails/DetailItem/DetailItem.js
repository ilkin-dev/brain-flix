import React from 'react';
import './DetailItem.css';

const DetailItem = ({ className, icon, text }) => {
  return (
    <div className={className}>
      <img className='detailItem__icon' src={icon}></img>
      <p className='detailItem__text silver-text'>{text}</p>
    </div>
  );
};

export default DetailItem;
