import HeaderNav from "../../organisms/HeaderNav/HeaderNav"
import logoHeader from "../../../assets/img/logoAgency.svg"
import HeroBanner from "../../molecules/HeroBanner/HeroBanner"
import FeaturesService from "../../organisms/FeaturesService/FeaturesService"
import CounterStatistics from "../../molecules/CounterStatistics/CounterStatistics"
import OurTeam from "../../organisms/OurTeam/OurTeam"

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
        },
        {
          title: "73+",
          text: "Agency members",
        },
        {
          title: "5.000",
          text: "Projects complete",
        }
      ]}
    />

    <OurTeam />
  </>
}