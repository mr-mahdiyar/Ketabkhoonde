import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBooks, addBook, getBookById } from "../services/booksServices";
import { STATUS } from "../utils/status";
const initialState = {
  books: [],
  booksStatus: STATUS.IDLE,
  searchTerm: "",
  singleBookById: {},
  singleBookByIdStatus: STATUS.IDEL,
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
      })
      .addCase(getBookByIdFromServer.pending, (state, _) => {
        state.singleBookByIdStatus = STATUS.LOADING;
      })
      .addCase(getBookByIdFromServer.fulfilled, (state, action) => {
        state.singleBookByIdStatus = STATUS.FULFILLED;
        state.singleBookById = action.payload;
      })
      .addCase(getBookByIdFromServer.rejected, (state) => {
        state.singleBookByIdStatus = STATUS.REJECTED;
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

export const getBookByIdFromServer = createAsyncThunk(
  "getBookByIdFromServer",
  async (bookId) => {
    const response = await getBookById(bookId);
    return response.data;
  }
);

export default booksSlice.reducer;
export const { setSearchTerm } = booksSlice.actions;
export const selectBookById = (state) => state.books.singleBookById
export const selectAllBooks = (state) => state.books.books;
export const selectSearchTerm = (state) => state.books.searchTerm;
