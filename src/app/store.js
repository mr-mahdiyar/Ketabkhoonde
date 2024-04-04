import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import authorsReducer from "./authorsSlice";
export const store = configureStore({
  reducer: {
    books: booksReducer,
    authors: authorsReducer,
  },
});
