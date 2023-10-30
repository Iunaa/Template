import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/Pages/Home/Home';
import AboutUs from '../components/Pages/AboutUs/AboutUs';
import SingleProject from "../components/Pages/Single_Project/SingleProject.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
  {
		path: "/about",
		element: <AboutUs />
	},
	{
		path: "/singleproject",
		element: <SingleProject/>
	}
])

export default router