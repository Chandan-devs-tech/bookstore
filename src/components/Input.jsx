import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';
import AddButton from './AddButton';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      return;
    }
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook)); // Dispatch the addBook action with the newBook data
    setTitle(''); // Clear the title input
    setAuthor(''); // Clear the author input
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        {/* Add onSubmit handler */}
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <AddButton />
      </form>
    </div>
  );
};

export default Input;
