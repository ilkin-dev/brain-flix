// src/components/BottomGroup/BottomGroup.js
import React, { useEffect, useState } from 'react';
import './BottomGroup.css';
import VideoDetails from '../VideoDetails/VideoDetails';
import CommentsList from '../CommentsList/CommentsList';
import SideVideos from '../SideVideos/SideVideos';
import CommentForm from '../CommentForm/CommentForm';
import { postComment } from '../../api/api';

const BottomGroup = ({ videos, currentVideoDetails, handleVideoClick, commentsCount }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (currentVideoDetails && currentVideoDetails.comments) {
      setComments(currentVideoDetails.comments);
    }
  }, [currentVideoDetails]);

  const handleAddComment = (commentText) => {
    const newComment = {
      comment: commentText
    }
    postComment(currentVideoDetails.id, newComment)
      .then((res) => {
        setComments(prevComments => [res.data, ...prevComments]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleCommentDeleted = (commentId) => {
    setComments(prevComments => prevComments.filter(c => c.id !== commentId));
  };

  return (
    <div className="bottomGroup section">
      <div className='bottomGroup__detailAndComment'>
        <VideoDetails details={currentVideoDetails} commentsCount={commentsCount} />
        <CommentForm onAddComment={handleAddComment} />
        <CommentsList videoId={currentVideoDetails.id} commentsList={comments || []} onCommentDeleted={handleCommentDeleted} />
      </div>
      <div className='bottomGroup__sideVideos'>
        <SideVideos videosList={videos} onVideoClick={handleVideoClick} />
      </div>
    </div>
  );
};

export default BottomGroup;
