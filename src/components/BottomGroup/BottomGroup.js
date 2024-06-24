import React from 'react';
import './BottomGroup.css';
import VideoDetails from '../VideoDetails/VideoDetails';
import CommentsList from '../CommentsList/CommentsList';
import SideVideos from '../SideVideos/SideVideos';
import CommentForm from '../CommentForm/CommentForm';

const BottomGroup = ({ currentVideoDetails }) => {
  return (
    <div className="bottomgroup">
      < VideoDetails details={currentVideoDetails} />
      < CommentForm />
      < CommentsList />
      < SideVideos />
    </div>
  );
};

export default BottomGroup;
