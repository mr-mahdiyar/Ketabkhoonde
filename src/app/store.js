import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSLice";
export const store = configureStore ({
    reducer: {
        books: booksReducer
    }
})