import React from 'react';
import './Avatar.css';
import avatarImage from '../../assets/images/Mohan-muruge.jpg';

const Avatar = ({ isImageProvided }) => {
  return (
    <div className="avatar">
      {isImageProvided ? <img src={avatarImage}></img> : ''}
    </div>
  );
};

export default Avatar;
