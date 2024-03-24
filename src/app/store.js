import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSLice";
import authorsReducer from "./authorsSlice";
export const store = configureStore({
  reducer: {
    books: booksReducer,
    authors: authorsReducer,
  },
});
