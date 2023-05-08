import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/Pages/Home/Home';
import AboutUs from '../components/Pages/AboutUs/AboutUs';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
  {
		path: "/about",
		element: <AboutUs />
	},
])

export default router