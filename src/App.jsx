// import "./components/main.scss";
import "./components/_base/_index.scss"
import Header2 from "./components/organisms/Header2/Header2.jsx";
import Portifolio from "./components/organisms/Portifolio/Portifolio.jsx";
import Tags from "./components/organisms/Tags/Tags.jsx";
import Contact from "./components/organisms/Contact/Contact.jsx";
import Footer from "./components/organisms/Footer/Footer.jsx";

export default function App(){
  return <>
    <Header2/>
    <Portifolio/>
    <Tags/>
    <Contact/>
    
    
    <Footer/>
  </> 
}
