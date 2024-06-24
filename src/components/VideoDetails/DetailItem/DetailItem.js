import React from 'react';
import './DetailItem.css';

const DetailItem = ({ icon, text }) => {
  return (
    <div className="detailItem">
      <img className='detailItem__icon' src={icon}></img>
      <p className='detailItem__text'>{text}</p>
    </div>
  );
};

export default DetailItem;
