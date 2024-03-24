import axios from "axios";

const serverUrl = "http://localhost:9000";

// get all authors
export const getAllAuthors = () => {
  const url = `${serverUrl}/authors`;
  return axios.get(url);
};

// add new author
export const addAuthor = (author) => {
    const url = `${serverUrl}/authors`;
    return axios.post(url, author)
}
