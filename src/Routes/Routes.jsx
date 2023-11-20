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
      }

    ]
  },
]);