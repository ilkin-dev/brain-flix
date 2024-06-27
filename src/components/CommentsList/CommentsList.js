import React from 'react';
import './CommentsList.css';
import Comment from './Comment/Comment';
import Divider from '../Divider/Divider';

const CommentsList = ({ commentsList }) => {
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
            />
            {index === commentsList.length - 1 && <Divider clsName="commentsList-lastDivider" />}
          </React.Fragment>
        ))
      }
    </div >
  );
};

export default CommentsList;