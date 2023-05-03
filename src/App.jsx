import "./components/main.scss"
import Header from "./components/organisms/Header/Header.jsx";
import Service from "./components/organisms/Service_/Service.jsx";
import Webflow from "./components/organisms/Webflow/Webflow";
import Contact from "./components/organisms/Contact/Contact.jsx";
import Footer from "./components/organisms/Footer/Footer.jsx";


function App(){
  return <>

       <Header/>
       <Webflow/>
       <Service/>
       <Contact />
       <Footer/>
       
      
  </> 
}

export default App

 