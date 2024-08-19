import React, { useState, useEffect } from 'react';
import './MainVideo.css';

const MainVideo = ({ currentVideoDetails, apiKey }) => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  useEffect(() => {
    setIsVideoPlayed(false);
  }, [currentVideoDetails]);

  if (!currentVideoDetails) {
    return <div>Loading video...</div>;
  }

  const videoSrc = `${currentVideoDetails.video}?api_key=${apiKey}`;

  const handlePlay = () => {
    setIsVideoPlayed(true);
  };

  const handlePause = () => {
    setIsVideoPlayed(false);
  };

  return (
    <div className="mainVideo section">
      <div className="container">
        <div className="videoPlayer">
          <video
            className="videoPlayer__video"
            controls
            loop
            preload="auto"
            width="100%"
            height="auto"
            poster={!isVideoPlayed ? currentVideoDetails.image : ''}
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
