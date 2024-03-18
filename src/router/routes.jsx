import { createBrowserRouter } from "react-router-dom";
import { App, HomePage } from "../";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
        path: "/",
        element: <HomePage />
    }],
  },
]);
