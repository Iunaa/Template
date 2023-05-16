import { createBrowserRouter } from "react-router-dom";

import HomePage from "../components/Pages/HomePage/HomePage";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
import Portifolio from "../components/Pages/Portifolio/Portifolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/portifolio",
    element: <Portifolio />,
  },
]);

export default router;
