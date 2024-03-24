import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import myTheme from "./utils/Theme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import { Provider } from "react-redux";
import { store } from "./app/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <Provider store={store}>
        <RouterProvider router={routes}>
          <App />
        </RouterProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
