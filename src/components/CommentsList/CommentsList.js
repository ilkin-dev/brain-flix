import React from 'react';
import './CommentsList.css';
import Comment from './Comment/Comment';
import Divider from '../Divider/Divider';
import { deleteComment } from '../../api/api';

const CommentsList = ({ videoId, commentsList, onCommentDeleted }) => {

  const handleDeleteComment = (commentId) => {
    deleteComment(videoId, commentId)
      .then(() => {
        onCommentDeleted(commentId);
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  }

  return (
    <div className="commentsList">
      {
        commentsList.map((item, index) => (
          <React.Fragment key={index}>
            <Divider />
            <Comment
              name={item.name}
              content={item.comment}
              date={item.timestamp}
              onDelete={() => handleDeleteComment(item.id)}
            />
            {index === commentsList.length - 1 && <Divider clsName="commentsList-lastDivider" />}
          </React.Fragment>
        ))
      }
    </div >
  );
};

export default CommentsList;