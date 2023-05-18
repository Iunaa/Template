import "./ourTeam.scss"

import CardOurTeam from "../../molecules/CardOurTeam/CardOurTeam";

import arrowLeft from "../../../assets/img/arrowLeft.svg";
import arrowRight from "../../../assets/img/arrowRight.svg";
import personAzah from "../../../assets/img/people/person--Azah.svg";
import personRoelof from "../../../assets/img/people/person--Roelof.svg";
import personLeonardo from "../../../assets/img/people/person--Leonardo.svg";
import personIzabella from "../../../assets/img/people/person--Izabella.svg";

export default function OurTeam() {
  return (
    <section className="our-team">
      <div className="container">
        <div className="our-team__header">
          <header className="headings--reverse3">
            <h2 className="our-team__title text--h2 text--white ">Team of Designers and Developers</h2>
            <h3 className="text--h5">Our Team</h3>
          </header>

          <div className="our-team__arrows">
            <button className="our-team__arrow" href=""><img src={arrowLeft} alt="" /></button>
            <button className="our-team__arrow" href=""><img src={arrowRight} alt="" /></button>
          </div>
        </div>

        <div className="our-team__cards">
          {our_teamCardsData.map((cur, idx) => (
            <CardOurTeam 
            key={idx} 
            img={cur.img} 
            name={cur.name} 
            office={cur.office} />
          ))}
        </div>
      </div>
    </section>
  )
}

const our_teamCardsData = [
  {
    img: {
      src: personAzah,
      alt: "",
    },
    name: "Leonardo Oliveira",
    office: "Designer"
  },
  {
    img: {
      src: personRoelof,
      alt: "",
    },
    name: "Roelof Bekkenenks",
    office: "React Developer"
  },
  {
    img: {
      src: personLeonardo,
      alt: "",
    },
    name: "Azah Anyeni",
    office: "Illustrator"
  },
  {
    img: {
      src: personIzabella,
      alt: "",
    },
    name: "Izabella Tabakova",
    office: "Product Designer"
  },
]
