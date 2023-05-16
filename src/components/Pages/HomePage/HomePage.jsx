// import "./components/main.scss";
import "../../../components/_base/_index.scss"
import logoWebflow from "../../../assets/img/logoWebflow.svg"
import bannerHero from "../../../assets/img/bannerHero.svg"

import HeaderNav from "../../organisms/HeaderNav/HeaderNav.jsx";
import Service from "../../organisms/ServiceFull/ServiceFull.jsx";
import Pricing from "../../organisms/PricingPlans/PricingPlans.jsx";
import FeaturesComponent from "../../organisms/FeaturesService/FeaturesService";
import AboutWebflow from "../../organisms/About/AboutWebflow";
import Contact from "../../organisms/Contact/Contact.jsx";
import Footer from "../../organisms/Footer/Footer.jsx";
import HeroComponent from "../../molecules/HeroBanner/HeroBanner";
import CounterStatistics from "../../molecules/CounterStatistics/CounterStatistics";

export default function HomePage() {
  return (
    <>
      <HeaderNav logoImg={logoWebflow} />
      <HeroComponent
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
      <FeaturesComponent 
        text={{
          title: "Custom Web Design",
          link: {
            src: "#",
            content: "Read More",
          }
        }}
        cardStyle="primary"
      />
      <AboutWebflow />
      <Service/>
      <CounterStatistics
        data={[
          {
            title: "42%",
            text: "Years of experience",
            background: "secondary",
          },
          {
            title: "73+",
            text: "Agency members",
            background: "secondary-dark",
          },
          {
            title: "5.000",
            text: "Projects complete",
            background: "secondary",
          },
        ]}
        background="secondary"
      />
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}
