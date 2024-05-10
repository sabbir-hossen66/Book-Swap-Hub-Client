import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/contacts",
        element: <div>this is contact</div>,
      },
      {
        path: "/about",
        element: <div>this is about</div>,
      },
    ],
  },
]);