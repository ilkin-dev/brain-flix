import React from 'react';
import './SideVideoItem.css';

const SideVideoItem = ({ videoDetails, onVideoClick }) => {

  const handleClick = () => {
    onVideoClick(videoDetails.id);
  };

  return (
    <div className="sideVideoItem" onClick={handleClick} >
      <div className='sideVideoItem__thumbnail'>
        <img src={videoDetails.image} alt={videoDetails.title} className="sideVideoItem__thumbnail-image" />
      </div>
      <div className='sideVideoItem__info'>
        <div className='sideVideoItem__title subheader'>{videoDetails.title}</div>
        <div className='sideVideoItem__channel body-copy'>{videoDetails.channel}</div>
      </div>
    </div>
  );
};

export default SideVideoItem;
