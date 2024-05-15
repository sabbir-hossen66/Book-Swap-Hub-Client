import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyQuries from "../Pages/MyQuries/MyQuries";
import AddQuries from "../Components/AddQuries/AddQuries";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import MySingleQuery from "../Components/MySingleQuery/MySingleQuery";
import UpdateQuery from "../Components/UpdateQuery/UpdateQuery";
import DetailQuery from "../Components/DetailQuery/DetailQuery";
import OnlyMyQuries from "../Pages/OnlyMyQuries/OnlyMyQuries";
import My_Query from "../Pages/My_Query/My_Query";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-queries",
        element: <PrivateRoutes><MyQuries></MyQuries></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/posts')
      },
      {
        path: "/mySingle-query",
        element: <MySingleQuery></MySingleQuery>,

      },
      {
        path: "/onlymy-quries",
        element: <OnlyMyQuries></OnlyMyQuries>,


      },
      {
        path: "/detail-query/:id",
        element: <DetailQuery></DetailQuery>,
        loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`)

      },
      {
        path: "/update-query/:id",
        element: <UpdateQuery></UpdateQuery>,
        loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`)

      },
      {
        path: "/add-quries",
        element: <PrivateRoutes> <AddQuries></AddQuries></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my_query",
        element: <My_Query></My_Query>,
        loader: () => fetch(`http://localhost:5000/posts`)

      },

    ],
  },
]);