import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBooks, addBook } from "../services/booksServices";
import { STATUS } from "../utils/status";
const initialState = {
  books: [],
  booksStatus: STATUS.IDLE,
  searchTerm: "",
};
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooksFromServer.pending, (state, _) => {
        state.booksStatus = STATUS.LOADING;
      })
      .addCase(getAllBooksFromServer.fulfilled, (state, action) => {
        state.booksStatus = STATUS.FULFILLED;
        state.books = action.payload;
      })
      .addCase(getAllBooksFromServer.rejected, (state, _) => {
        state.booksStatus = STATUS.REJECTED;
      })
      .addCase(addBookToServer.fulfilled, (state, action) => {
        state.books.push(action.payload);
      });
  },
});

export const getAllBooksFromServer = createAsyncThunk(
  "getBooksFromServer",
  async () => {
    const response = await getAllBooks();
    return response.data;
  }
);

export const addBookToServer = createAsyncThunk(
  "AddBookToServer",
  async (book) => {
    const response = await addBook(book);
    return response.data;
  }
);

export default booksSlice.reducer;
export const { setSearchTerm } = booksSlice.actions;
export const selectBookById = (state, bookId) =>
  state.books.books.find((book) => book.id === bookId);
export const selectAllBooks = (state) => state.books.books;
export const selectSearchTerm = (state) => state.books.searchTerm;
