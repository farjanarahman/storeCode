import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginForm from "../pages/Login/Login";
import RegisterForm from "../pages/Register/Register";
import About from "../pages/About/About";
import ContactUs from "../pages/Contact/Contact";
import ResetPass from "../pages/Login/ResetPass";
import Store from "../pages/Store/Store";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import AddProduct from "../pages/AddProduct/AddProduct";
import Profile from "../pages/Profile/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LoginForm></LoginForm>
      },
      {
        path: '/register',
        element: <RegisterForm></RegisterForm>
      },
      {
        path: '/reset_pass',
        element: <ResetPass></ResetPass>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/store',
        element: <Store></Store>
      },
      {
        path: '/policy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        loader: () => fetch('https://storecode-server.vercel.app/addproduct')
      }

    ]
  },
]);