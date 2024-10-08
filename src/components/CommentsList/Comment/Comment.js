import './Comment.css';
import Avatar from '../../Avatar/Avatar';
import formatDate from '../../../helpers/timestampFormatter';

const Comment = ({ name, content, date, onDelete }) => {
  return (
    <div className="comment">
      <div className='comment__avatar'>
        <Avatar isImageProvided={false} />
      </div>
      <div className='comment__right'>
        <div className='comment__top'>
          <div className='comment__name subheader'>{name}</div>
          <div className='comment__date silver-text'>{formatDate(date)}</div>
        </div>
        <div className='comment__content body-copy'>{content}</div>
        <button onClick={onDelete} className="comment__delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Comment;
