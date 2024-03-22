import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    booksStatus: "IDLE"
}
export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        
    }
})