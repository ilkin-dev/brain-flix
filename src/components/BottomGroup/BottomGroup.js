// src/components/BottomGroup/BottomGroup.js
import React from 'react';
import './BottomGroup.css';
import VideoDetails from '../VideoDetails/VideoDetails';
import CommentsList from '../CommentsList/CommentsList';
import SideVideos from '../SideVideos/SideVideos';
import CommentForm from '../CommentForm/CommentForm';

const BottomGroup = ({ videos, currentVideoDetails, handleVideoClick, commentsCount, handlePostComment }) => {

  const handleAddComment = (commentText) => {
    const newComment = {
      name: "Anonymous",
      comment: commentText
    };
    handlePostComment(currentVideoDetails.id, newComment);
  };

  return (
    <div className="bottomGroup section">
      <div className='bottomGroup__detailAndComment'>
        <VideoDetails details={currentVideoDetails} commentsCount={commentsCount} />
        <CommentForm onAddComment={handleAddComment} />
        <CommentsList commentsList={currentVideoDetails.comments || []} />
      </div>
      <div className='bottomGroup__sideVideos'>
        <SideVideos videosList={videos} onVideoClick={handleVideoClick} />
      </div>
    </div>
  );
};

export default BottomGroup;
