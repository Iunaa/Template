import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Pages/Home/Home";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
import Portifolio from "../components/Pages/Portifolio/Portifolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
