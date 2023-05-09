// import "./components/main.scss";
import "../../../components/_base/_index.scss"
import logoWebflow from "../../../assets/img/logoWebflow.svg"
import bannerHero from "../../../assets/img/bannerHero.svg"


import Header from "../../../components/organisms/Header/Header.jsx";
import Service from "../../../components/organisms/Service/Service.jsx";
import Pricing from "../../../components/organisms/Pricing/Pricing.jsx";
// import Webflow from "../../../components/organisms/Webflow/Webflow.jsx";
import Features from "../../../components/organisms/Features/Features";
import AboutWebflow from "../../../components/organisms/About/AboutWebflow";
import Contact from "../../../components/organisms/Contact/Contact.jsx";
import Footer from "../../../components/organisms/Footer/Footer.jsx";
import Hero from "../../molecules/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header logoImg={logoWebflow} />
      <Hero
        img={bannerHero}
        text={{
          tag:"morden studio",
          title:"We’re Help To Build Your Dream Project",
          paragraph:"Agency provides a full service range including technical skills, design, business understanding.",
          button: [
            {
              text: "How We Work",
              style: "button button--secondary",
            },
            {
              text: "Contact Us",
              style: "button",
            },
          ]
        }}
      />
      {/* <Webflow/>  */}
      <Features />
      <AboutWebflow />
      <Service/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}
