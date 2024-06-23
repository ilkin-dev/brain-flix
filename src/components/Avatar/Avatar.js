import React from 'react';
import './Avatar.css';
import avatarImage from '../../assets/images/Mohan-muruge.jpg';

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={avatarImage}></img>
    </div>
  );
};

export default Avatar;
