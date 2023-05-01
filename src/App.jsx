import "./components/main.scss";
import Header from "./components/organisms/Header/Header.jsx";
import Service from "./components/organisms/Service_/Service.jsx";
import Pricing from "./components/organisms/Pricing/Pricing.jsx";
import Awards from "./components/organisms/Awards/Awards.jsx";
import BlogArticles from "./components/molecules/BlogArticles/BlogArticles";

export default function App() {
  return (
    <>
      <Header />
      <Service />
      <Pricing />
      <Awards />
      <BlogArticles />
    </>
  );
}
