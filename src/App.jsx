import "./components/main.scss";
import Header from "./components/organisms/Header/Header.jsx";
import Service from "./components/organisms/Service_/Service.jsx";
import Pricing from "./components/organisms/Pricing/Pricing.jsx";
import Awards from "./components/organisms/Awards/Awards.jsx";
import BlogArticles from "./components/organisms/BlogArticles/BlogArticles.jsx";
import PortifolioCard from "./components/molecules/portifolioCard/portifolioCard";

export default function App() {
  return (
    <>
      <Header />
      <Service />
      <Pricing />
      <Awards />
      <BlogArticles />
      <PortifolioCard />
    </>
  );
}
