import Counter from "../../molecules/Counter/Counter"
import Header from "../../organisms/Header/Header"

import logoHeader from "../../../assets/img/logoAgency.svg"
import Hero from "../../molecules/Hero/Hero"
import Features from "../../organisms/Features/Features"

export default function AboutUs() {
  return <>
    <Header logoImg={logoHeader} />
    <Hero
      text={{
        title:"About Us",
        paragraph:"Agency provides a full service range including technical skills, design, business understanding.",
      }}
      style={"center"}
    />
    <Features 
      text={{
        paragraph: "Long run, and work as an extension of the merchant's team.",
        description: "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension. ",
        // title: "Custom Web Design",
        // link: {
        //   // style: "text--white", 
        //   src: "#",
        //   content: "Read More",
        // }
      }}

      cardStyle="secondary "
    />
    <Counter
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
  </>
}