import "./serviceFull.scss"
import ServiceList from "../../molecules/ServiceList/ServiceList.jsx";

import design from "../../../assets/img/design.svg"
import development from "../../../assets/img/development.svg"
import marketing from "../../../assets/img/marketing.svg"

export default function ServiceFull(){
  return (    
    <div className="service">
      <div className="container">
        <header className="headings--reverse3 service__title">
          <h2 className="title--3 title--3--white">How Webflow Expert Can Help</h2>
          <h3 className="title--5">Service</h3>
        </header>

        <div className="service__cards">
          {serviceCardsData.map((cur, idx) => (
            <ServiceList
              key={idx}
              img={cur.img} 
              title={cur.title} 
              paragraph={cur.paragraph} 
              anchor={cur.anchor}
            />
          ))}
        </div>
      </div>
    </div>
  ) 
}

const serviceCardsData = [
  {
    img: design, 
    title: "Design",
    paragraph: "Agency provides a full service range including technical skills, design.", 
    anchor: "Learn More",
  },
  {
    img: development,
    title: "Development",
    paragraph: "Full service range including technical skills, design, business etc.",
    anchor: "Discover More",
  },
  {
    img: marketing,
    title: "Marketing",
    paragraph: "Technical skills, design, business understanding, ability.",
    anchor: "Explore Now",
  },
]