import { createBrowserRouter } from "react-router-dom";
import { App, HomePage, AllBooks, SearchBooks, SingleBook } from "../";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/books/search/:searchTerm",
        element: <SearchBooks />
      },
      {
        path: "/books/:bookId",
        element: <SingleBook />
      }
    ],
  },
]);
