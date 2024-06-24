import React from 'react';
import './VideoDetails.css';

import formatDate from '../../helpers/timestampFormatter';
import icons from '../../config/icons';
import DetailItem from './DetailItem/DetailItem';

const VideoDetails = ({ details }) => {
  return (
    <div className="videoDetails">
      <h1 className='videoDetails__title page-header'>{details.title}</h1>
      <div className='videoDetails__beforeDescription'>
        <div className='beforeDescription__left'>
          <p className='beforeDescription__left-channel'>By {details.channel}</p>
          <p className='beforeDescription__left-date'>
            {formatDate(details.timestamp)}
          </p>
        </div>
        <div className='beforeDescription__right'>
          < DetailItem icon={icons.views} text={details.views} />
          < DetailItem icon={icons.likes} text={details.likes} />
        </div>
      </div>
      <p className='videoDetails__description'>
        {details.description}
      </p>
      <p className='videoDetails__commentNumber'>
        {details.comments.length}
      </p>
    </div>
  );
};

export default VideoDetails;
