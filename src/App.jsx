// import "./components/main.scss";
import "./components/_base/_index.scss"
import Header from "./components/organisms/Header/Header.jsx";
import Service from "./components/organisms/Service/Service.jsx";
import Pricing from "./components/organisms/Pricing/Pricing.jsx";
import Webflow from "./components/organisms/Webflow/Webflow.jsx";
import Features from "./components/organisms/Features/Features";

export default function App(){
  return <>
    <Header/>
    <Webflow/> 
    <Features />
    <Service/>
    <Pricing/>
  </> 
}
