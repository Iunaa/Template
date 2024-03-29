import Counter from "../../molecules/Counter/Counter"

import design from "../../../assets/img/design.svg"
import development from "../../../assets/img/development.svg"
import marketing from "../../../assets/img/marketing.svg"

export default function AboutUs() {
  return <div className="">
    <Counter
      data={[
        {
          title: "42%",
          text: "Years of experience",
          icon: {
            alt: "",
            src: design
          },
        },
        {
          title: "73+",
          text: "Agency members",
          icon: {
            alt: "",
            src: development
          },
        },
        {
          title: "5.000",
          text: "Projects complete",
          icon: {
            alt: "",
            src: marketing
          },  
        }
      ]}
    />
  </div>
}