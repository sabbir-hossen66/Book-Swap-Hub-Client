import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Queries from "../Pages/Queries/Queries";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
      },
      {
        path: "/Log-in",
        element: <div>this is about</div>,
      },
    ],
  },
]);