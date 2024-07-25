import React, { useState } from 'react';
import './CommentForm.css';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

import icons from '../../config/icons';

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment('');
    }
  };

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <Avatar isImageProvided={true} />
      <div className='commentForm__right'>
        <div className='commentForm__mid'>
          <div className='commentForm__label silver-text text-demi'>
            JOIN THE CONVERSATION
          </div>
          <input
            className='commentForm__input form-field body-copy'
            placeholder='Add a new comment'
            value={comment}
            onChange={handleInputChange}
          />
        </div>
        <Button
          className="commentForm__button"
          icon={icons.addComment}
          text="COMMENT"
          onClick={handleSubmit}
        />
      </div>

    </form>
  );
};

export default CommentForm;
