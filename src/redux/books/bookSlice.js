import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rfuE1Pk6Im3pI23cyHz3/books';

export const getBooks = createAsyncThunk('getBooks', async (thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong...');
  }
});

export const postBook = createAsyncThunk('postBook', async (data, thunkAPI) => {
  try {
    const resp = await axios.post(url, data);
    thunkAPI.dispatch(getBooks());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong...');
  }
});

export const deleteBook = createAsyncThunk('deleteBook', async (id, thunkAPI) => {
  try {
    const resp = await axios.delete(`${url}/${id}`, id);
    thunkAPI.dispatch(getBooks());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong...');
  }
});

const initialState = {
  books: [],
  loading: false,
  error: null,
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      const data = Object.keys(action.payload).map((item) => {
        const book = {};
        book.author = action.payload[item][0].author;
        book.category = action.payload[item][0].category;
        book.title = action.payload[item][0].title;
        book.item_id = item;
        return book;
      });
      state.books = data;
    },
    [getBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [postBook.pending]: (state) => {
      state.loading = true;
    },
    [postBook.fulfilled]: (state) => {
      state.loading = false;
    },
    [postBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteBook.pending]: (state) => {
      state.loading = true;
    },
    [deleteBook.fulfilled]: (state) => {
      state.loading = false;
    },
    [deleteBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
