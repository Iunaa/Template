import "./components/main.scss"
import Header from "./components/organisms/Header/Header.jsx";
import Service from "./components/organisms/Service_/Service.jsx";
import Pricing from "./components/organisms/Pricing/Pricing.jsx";

export default function App(){
  return <>
    <Header/>
    <Service/>
    <Pricing />
  </> 
}

 