import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookNow from "../pages/BookNow/BookNow";
import MyBooking from "../pages/MyBooking/MyBooking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>,
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>,
        },
        {
          path: 'booknow/:id',
          element: <BookNow></BookNow>,
          loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
          path:'mybooking',
          element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;