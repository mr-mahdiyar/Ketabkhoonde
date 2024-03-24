import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  getAllAuthors,
  getAuthorById,
  addAuthor,
} from "../services/authorServices";
const initialState = {
  authors: [],
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
        state.authors.push(action.payload)
      })
      .addCase(addAuthorToServer.rejected, (state, _) => {
        state.authorsStatus = STATUS.REJECTED;
      })
      
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
