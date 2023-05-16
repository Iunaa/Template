import CounterStatistics from "../../molecules/CounterStatistics/CounterStatistics"
import HeaderNav from "../../organisms/HeaderNav/HeaderNav"

import logoHeader from "../../../assets/img/logoAgency.svg"
import HeroBanner from "../../molecules/HeroBanner/HeroBanner"
import FeaturesService from "../../organisms/FeaturesService/FeaturesService"
import OurTeam from "../../organisms/OurTeam/OurTeam"

import iconTeste from "../../../assets/img/development.svg"

export default function AboutUs() {
  return <>
    <HeaderNav logoImg={logoHeader} />
    <HeroBanner
      text={{
        title:"About Us",
        paragraph:"Agency provides a full service range including technical skills, design, business understanding.",
      }}
      style={"center"}
    />
    <FeaturesService 
      text={{
        paragraph: "Long run, and work as an extension of the merchant's team.",
        description: "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension. ",
      }}

      cardStyle="secondary "
    />
    <CounterStatistics
      data={[
        {
          title: "42%",
          text: "Years of experience",
          background: "secondary--dark",
        },
        {
          title: "73+",
          text: "Agency members",
          background: "secondary--dark",
        },
        {
          title: "5.000",
          text: "Projects complete",
          background: "secondary--dark",
        },
      ]}
      background="secondary-dark"
    />
    {/* <CounterStatistics
        data={[
          {
            title: "42%",
            text: "Years of experience",
            background: "secondary--dark",
            icon: {
              src: iconTeste,
              alt: "",
            }
          },
          {
            title: "73+",
            text: "Agency members",
            background: "secondary--dark",
            icon: {
              src: iconTeste,
              alt: "",
            }
          },
          // {
          //   title: "5.000",
          //   text: "Projects complete",
          //   background: "secondary",
          //   icon: {
          //     src: iconTeste,
          //     alt: "",
          //   }
          // },
        ]}
        background="secondary-dark"
      /> */}
    <OurTeam />
  </>
}