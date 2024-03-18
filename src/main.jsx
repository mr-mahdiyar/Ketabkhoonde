import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import myTheme from "./utils/Theme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
