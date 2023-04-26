import "./components/main.scss"
import Header from "./components/organisms/Header/Header.jsx";
import Service from "./components/organisms/Service_/Service.jsx";
import Pricing from "./components/organisms/Pricing/Pricing.jsx";
import Webflow from "./components/organisms/Webflow/Webflow";






  export default function App(){
  return <>
       <Header/>
       <Webflow/>
       <Service/>
       <Pricing/>
      
  </> 
}

 