import React from 'react';
import './VideoDetails.css';

import formatDate from '../../helpers/timestampFormatter';
import icons from '../../config/icons';
import DetailItem from './DetailItem/DetailItem';
import Divider from '../Divider/Divider';

const VideoDetails = ({ details, commentCount }) => {
  return (
    <div className="videoDetails">
      <h1 className='videoDetails__title page-header headline'>{details.title}</h1>
      <div className='videoDetails__beforeDescription'>
        <div className='beforeDescription__left'>
          <p className='beforeDescription__left-channel subheader'>By {details.channel}</p>
          <p className='beforeDescription__left-date'>
            {formatDate(details.timestamp)}
          </p>
        </div>
        <div className='beforeDescription__right'>
          < DetailItem className={"beforeDescription__right-views detailItem"} icon={icons.views} text={details.views} />
          < DetailItem className={"beforeDescription__right-likes detailItem"} icon={icons.likes} text={details.likes} />
        </div>
      </div>
      <Divider />
      <p className='videoDetails__description body-copy'>
        {details.description}
      </p>
      <p className='videoDetails__commentNumber subheader'>
        {commentCount} Comments
      </p>
    </div>

  );
};

export default VideoDetails;
