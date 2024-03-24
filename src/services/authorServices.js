import axios from "axios";

const serverUrl = "https://localhost:9000";

// get all authors
export const getAllAuthors = () => {
  const url = `${serverUrl}/authors`;
  return axios.get(url);
};

//get author by id
export const getAuthorById = (authorId) => {
    const url =`${serverUrl}/authors/${authorId}`;
    return axios.get(url)
}

// add new author
export const addAuthor = (author) => {
    const url = `${serverUrl}/authors`;
    return axios.post(url, author)
}
