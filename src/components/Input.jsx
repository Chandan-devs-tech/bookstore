import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/bookSlice';
import '../styles/Input.css';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!title || !author || !category) {
      return;
    }
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(postBook(newBook)); // Dispatch the addBook action with the newBook data
    setTitle(''); // Clear the title input
    setAuthor(''); // Clear the author input
  };
  return (
    <div className="formContainer">
      <h2 className="formTitle">Add New Book</h2>
      <form className="form">
        <input
          type="text"
          className="titleInput"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="authorInput"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select className="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>Select an option</option>
          <option value="Fiction">Fiction</option>
          <option value="Poetry">Poetry</option>
          <option value="Science and Nature">Science and Nature</option>
          <option value="Mystery/Thriller">Mystery/Thriller</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        <button type="button" className="addBtn" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
};

export default Input;
