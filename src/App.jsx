<<<<<<< HEAD
import "./components/main.scss";
import Header from "./components/organisms/Header/Header.jsx";
import Service from "./components/organisms/Service_/Service.jsx";
import Pricing from "./components/organisms/Pricing/Pricing.jsx";
import Awards from "./components/organisms/Awards/Awards.jsx";
import BlogArticles from "./components/organisms/BlogArticles/BlogArticles";
=======
import {  RouterProvider } from 'react-router-dom';
import router from './Routes';
>>>>>>> 7692a68f32d79ab417b41d0e1562aa74c4359730

export default function App(){
  return (
<<<<<<< HEAD
    <>
      <Header />
      <Service />
      <Pricing />
      <Awards />
      <BlogArticles />
    </>
  );
}
=======
    <RouterProvider router={router} />
  )
}
>>>>>>> 7692a68f32d79ab417b41d0e1562aa74c4359730
