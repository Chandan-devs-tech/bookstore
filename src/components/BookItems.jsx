import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/bookSlice';

const BookItems = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bookItemContainer">
      <div className="titleBtns">
        <div className="bookItemTitle">
          <p className="categoryItem">{category}</p>
          <h2 className="titleItem">{title}</h2>
          <p className="authorItem">{author}</p>
        </div>
        <div className="btnContainer">
          <button type="button">Comment</button>
          <button type="button" className="bordered">Edit</button>
          <button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
        </div>
      </div>
      <div className="statusContainer">
        <FontAwesomeIcon icon={faCircleNotch} className="circle" />
        <div className="completedContainer">
          <p className="percentage">65%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapterContainer">
        <p className="currentChapter">Current Chapter</p>
        <p className="chapterLesson">Chapter 7</p>
        <button type="button" className="progressBtn">Update progress</button>
      </div>
    </div>
  );
};

BookItems.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItems;
