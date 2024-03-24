import React, { useEffect, useState } from "react";
import { Navbar, Intro, Slider, Footer } from "./";
// import AddbookForm from "./components/AddbookForm";
// import AddAuthorForm from "./components/AddAuthorForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksFromServer, selectAllBooks } from "./app/booksSLice";
import { selectAllAuthors, getAllAuthorsFromServer } from "./app/authorsSlice";
import { Outlet, useLocation } from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooksFromServer());
    dispatch(getAllAuthorsFromServer());
  }, []);
  const books = useSelector(selectAllBooks);
  const authors = useSelector(selectAllAuthors);
  const [id, name] = authors;
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar />
      {/* <AddbookForm /> */}
      {/* <AddAuthorForm /> */}
      {pathname === "/" ? <Intro /> : null}
      <Slider
        sliderBooks={books.slice(books.length - 7, books.length)}
        authors={authors}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
