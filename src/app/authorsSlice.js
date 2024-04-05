import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  getAllAuthors,
  addAuthor,
  getAuthorById,
} from "../services/authorServices";
const initialState = {
  authors: [],
  singleAuthor: {},
  singleAuthorStatus: STATUS.IDEL,
  authorsStatus: STATUS.IDEL,
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(getAllAuthorsFromServer.pending, (state, _) => {
        state.authorsStatus = STATUS.LOADING;
      })
      .addCase(getAllAuthorsFromServer.fulfilled, (state, action) => {
        state.authorsStatus = STATUS.FULFILLED;
        state.authors = action.payload;
      })
      .addCase(getAllAuthorsFromServer.rejected, (state, _) => {
        state.authorsStatus = STATUS.REJECTED;
      })
      .addCase(addAuthorToServer.pending, (state, _) => {
        state.authorsStatus = STATUS.LOADING;
      })
      .addCase(addAuthorToServer.fulfilled, (state, action) => {
        state.authorsStatus = STATUS.FULFILLED;
        state.authors.push(action.payload);
      })
      .addCase(addAuthorToServer.rejected, (state, _) => {
        state.authorsStatus = STATUS.REJECTED;
      })
      .addCase(getAuthorByIdFromServer.pending, (state, _) => {
        state.singleAuthorStatus = STATUS.LOADING;
      })
      .addCase(getAuthorByIdFromServer.fulfilled, (state, action) => {
        state.singleAuthorStatus = STATUS.FULFILLED;
        state.singleAuthor = action.payload;
      })
      .addCase(getAuthorByIdFromServer.rejected, (state, _) => {
        state.singleAuthorStatus = STATUS.REJECTED;
      });
  },
});

export const getAllAuthorsFromServer = createAsyncThunk(
  "getAllAuthorsFromServer",
  async () => {
    const response = await getAllAuthors();
    return response.data;
  }
);

export const addAuthorToServer = createAsyncThunk(
  "addAuthorToServer",
  async (author) => {
    const response = await addAuthor(author);
    return response.data;
  }
);

export const getAuthorByIdFromServer = createAsyncThunk(
  "getAuthorByIdFromServer",
  async (authorId) => {
    const response = await getAuthorById(authorId);
    return response.data;
  }
);
export const selectAuthorById = (state, authorId) =>
  state.author.authors.find((author) => author.id === authorId);
export const selectAllAuthors = (state) => state.authors.authors;
export const selectAuthorByID = (state) => state.authors.singleAuthor;
export default authorSlice.reducer;
