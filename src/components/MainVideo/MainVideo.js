import React from 'react';
import './MainVideo.css';
import ControlsBar from './ControlsBar/ControlsBar';
import videoDetails from '../../data/video-details.json';

const MainVideo = () => {
  return (
    <div className="mainVideo section component">
      <div className='container'>
        <div className='videoPlayer'>
          <video width="100%" height="auto" controls autoPlay loop preload="auto">
            <source src={videoDetails[0].video} />

          </video>
        </div>
        <ControlsBar />
      </div>
    </div>
  );
};

export default MainVideo;
