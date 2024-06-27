import React from 'react';
import './SideVideos.css';
import SideVideoItem from './SideVideoItem/SideVideoItem';
import Divider from '../Divider/Divider';

const SideVideos = ({ videosList, onVideoClick }) => {
  if (!videosList) {
    return <div>Loading side videos...</div>;
  }

  return (
    <div className="sideVideos">
      <div className='sideVideos__title silver-text subheader'>NEXT VIDEOS</div>
      <div className='sideVideos__list'>
        {videosList.map((video, index) => (
          <SideVideoItem key={video.id} videoDetails={video} onVideoClick={onVideoClick}
          />
        ))}
      </div>

    </div>
  );
};

export default SideVideos;
