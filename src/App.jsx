import "./index.css";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import ContactPage from "./pages/ContactPage"
import NewsPage from "./pages/NewsPage"
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }, 
  { 
    path: "/login",
    element: <LoginPage />
  },
  { 
    path: "/register",
    element: <RegistrationPage />
  },
  { 
    path: "/contact",
    element: <ContactPage />
  },
  { 
    path: "/news",
    element: <NewsPage />
  }
])

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
