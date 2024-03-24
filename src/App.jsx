import React, { useEffect, useState } from "react";
import { Navbar, Intro, Slider, Footer } from "./";
// import AddbookForm from "./components/AddbookForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksFromServer, selectAllBooks } from "./app/booksSLice";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooksFromServer());
  }, []);
  const books = useSelector(selectAllBooks);
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar />
      {pathname === "/" ? <Intro /> : null}
      <Slider sliderBooks={books.slice(books.length - 7, books.length)} />
      {/* <AddbookForm /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
