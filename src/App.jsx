import React from "react";
import { Navbar, Footer } from "./";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
