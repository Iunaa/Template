import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./sliderOutTeam.scss"

import personAzah from "../../../assets/img/people/person--Azah.svg";
import personRoelof from "../../../assets/img/people/person--Roelof.svg";
import personLeonardo from "../../../assets/img/people/person--Leonardo.svg";
import personIzabella from "../../../assets/img/people/person--Izabella.svg";
import CardOurTeam from "../CardOurTeam/CardOurTeam";

export default function SliderOutTeam() {
  const settings = {
    dots: true,
    // infinite: false,
    speed: 500,
    centerMode: false,
    // variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {our_teamCardsData.map((cur, idx) => (
        <CardOurTeam 
          key={idx} 
          img={cur.img} 
          name={cur.name} 
          office={cur.office} 
        />
      ))}
    </Slider>
  )
}

const our_teamCardsData = [
  {
    img: {
      src: personAzah,
      alt: "aaaaaaa aaaa",
    },
    name: "Azah Anyeni",
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
    name: "Leonardo Oliveira",
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
  {
    img: {
      src: personAzah,
      alt: "aaaaaaa aaaa",
    },
    name: "Azah Anyeni",
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
    name: "Leonardo Oliveira",
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