// import "./components/main.scss";
import "../../../components/_base/_index.scss"

import Header from "../../../components/organisms/Header/Header.jsx";
import Service from "../../../components/organisms/Service/Service.jsx";
import Pricing from "../../../components/organisms/Pricing/Pricing.jsx";
import Webflow from "../../../components/organisms/Webflow/Webflow.jsx";
import Features from "../../../components/organisms/Features/Features";
import AboutWebflow from "../../../components/organisms/About/AboutWebflow";
import Contact from "../../../components/organisms/Contact/Contact.jsx";
import Footer from "../../../components/organisms/Footer/Footer.jsx";

import logoWebflow from "../../../assets/img/logoWebflow.svg"

export default function Home() {
  return (
    <>
      <Header logoimg={logoWebflow} />
      <Webflow/> 
      <Features />
      <AboutWebflow />
      <Service/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}
