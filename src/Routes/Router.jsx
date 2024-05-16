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
import My_Query from "../Pages/My_Query/My_Query";
import SeeRecommendationData from "../Components/SeeRecommendationData/SeeRecommendationData";
import MyRecommendation from "../Pages/MyRecommendation/MyRecommendation";


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
        loader: () => fetch('https://book-swap-server.vercel.app/posts')
      },
      {
        path: "/mySingle-query",
        element: <MySingleQuery></MySingleQuery>,

      },

      {
        path: "/detail-query/:id",
        element: <DetailQuery></DetailQuery>,
        loader: ({ params }) => fetch(`https://book-swap-server.vercel.app/posts/${params.id}`)

      },
      {
        path: "/update-query/:id",
        element: <UpdateQuery></UpdateQuery>,
        loader: ({ params }) => fetch(`https://book-swap-server.vercel.app/posts/${params.id}`)

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
        loader: () => fetch(`https://book-swap-server.vercel.app/posts`)
      },
      {
        path: "/see_recom",
        element: <SeeRecommendationData></SeeRecommendationData>,
        loader: () => fetch(`https://book-swap-server.vercel.app/recommendation`)

      },
      {
        path: "/my_recom",
        element: <MyRecommendation></MyRecommendation>,
        loader: () => fetch(`https://book-swap-server.vercel.app/recommendation`)

      },

    ],
  },
]);