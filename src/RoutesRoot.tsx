
import { createBrowserRouter } from "react-router-dom";
import { Journal } from "./pages/journal/Journal";
import { Main } from "./pages/landing/Main";
import { Login } from "./pages/login/Login";

export const RoutesRoot = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: "/journal",
      element: <Journal/>,
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);
  