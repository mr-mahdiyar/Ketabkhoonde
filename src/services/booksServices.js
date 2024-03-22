import axios from "axios";

const serverUrl = "http://localhost:9000"

// get all books
export const getAllBooks = () => {
    const url = `${serverUrl}/books`
    return axios.get(url)
}

// get a book
export const getSingleBook = (bookId) => {
    const url = `${serverUrl}/books/${bookId}`
    return axios.get(url)
}

// add a book
export const addBook = (book) => {
    const url = `${serverUrl}/books`
    return axios.post(url, book)
}