import React, { useEffect } from "react";
import { Navbar, Footer } from "./";
// import AddbookForm from "./components/AddbookForm";
import { useDispatch } from "react-redux";
import { getAllBooksFromServer } from "./app/booksSLice";
import { Outlet } from "react-router-dom";



const App = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllBooksFromServer())
  }, [])

  return (
    <div>
      <Navbar />
      {/* <AddbookForm /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
