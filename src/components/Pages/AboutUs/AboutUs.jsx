import Counter from "../../molecules/Counter/Counter"
import Header from "../../organisms/Header/Header"

import logoHeader from "../../../assets/img/logoAgency.svg"
import Hero from "../../molecules/Hero/Hero"

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