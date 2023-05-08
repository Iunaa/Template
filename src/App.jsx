// import "./components/main.scss";
import "./components/_base/_index.scss"
import Header2 from "./components/organisms/Header2/Header2.jsx";
import Portifolio from "./components/organisms/Portifolio/Portifolio.jsx";
import Tags from "./components/organisms/Tags/Tags.jsx";
import Image from "./components/organisms/Image_/Image.jsx";
import Problem from "./components/organisms/Problem/Problem.jsx";
import GridImages from "./components/organisms/Grid5_Images/GridImages";
import Solution from "./components/organisms/Solution/Solution.jsx";
import Contact from "./components/organisms/Contact/Contact.jsx";
import Footer from "./components/organisms/Footer/Footer.jsx";

export default function App(){
  return <>
    <Header2/>
    <Portifolio/>
    <Tags/>
    <Image/>
    <Problem/>
    <GridImages/>
    <Solution/>
    <Contact/>
    
    
    
    <Footer/>
  </> 
}
