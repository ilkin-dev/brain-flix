import React, { useState, useEffect, useRef } from 'react';
import './MainVideo.css';

const MainVideo = ({ currentVideoDetails, apiKey }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [currentVideoDetails]);

  if (!currentVideoDetails) {
    return <div>Loading video...</div>;
  }

  const videoSrc = `${currentVideoDetails.video}?api_key=${apiKey}`;

  return (
    <div className="mainVideo section">
      <div className="container">
        <div className="videoPlayer">
          <video
            ref={videoRef}
            className="videoPlayer__video"
            controls
            loop
            preload="auto"
            width="100%"
            height="auto"
            poster={currentVideoDetails.image}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
