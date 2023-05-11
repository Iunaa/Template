import { useState } from "react";
import SOFA from "../../../assets/img/SOFA.svg";
import KeyBoard from "../../../assets/img/KeyBoard.svg";
import DDDone from "../../../assets/img/DDDone.svg";
import WorkMedia from "../../../assets/img/WordMedia.svg";
import HandP from "../../../assets/img/HandP.svg";
import "./portifolioCard.scss";

const list = [
  {
    img: KeyBoard,
    tag: "Design",
    title: "KeyBoard",
  },
  {
    img: SOFA,
    tag: "Design",
    title: "SOFA",
  },
  {
    img: DDDone,
    tag: "Branding",
    title: "DDDone",
  },
  {
    img: WorkMedia,
    tag: "Illustration",
    title: "Work Media",
  },
  {
    img: HandP,
    tag: "Branding",
    title: "HandP",
  },
];

export default function PortifolioCard(props) {
  const [selectTag, setSelectTag] = useState("");
  const handleTagChange = (ev) => {
    setSelectTag(ev.target.value);
  };
  return (
    <>
      <div className="portifolio-filter">
        <div className="portifolio-filter__container">
          <select
            name="selecao"
            id="filter"
            className="portifolio-filter__selecao"
            onChange={handleTagChange}
          >
            <option
              value=""
              name="showall"
              className="portifolio-filter__itens"
            >
              Show All
            </option>
            <option
              value="design"
              name="design"
              className="portifolio-filter__itens"
            >
              Design
            </option>
            <option
              value="branding"
              name="branding"
              className="portifolio-filter__itens"
            >
              Branding
            </option>
            <option
              value="illustration"
              name="illustration"
              className="portifolio-filter__itens"
            >
              Illustration
            </option>
            <option
              value="motion"
              name="motion"
              className="portifolio-filter__itens"
            >
              Motion
            </option>
          </select>
        </div>
      </div>
      <div className="portifolio-cards">
        {list
          .filter(
            (props) => props.tag.toLowerCase() === selectTag || selectTag === ""
          )
          .map((props, index) => (
            <section className="portifolio-cards__itens">
              <picture className="portifolio-cards__picture">
                <img
                  src={props.img}
                  alt="image card"
                  className="portifolio-cards__image"
                />
              </picture>
              <div className="portifolio-cards__text">
                <a href="#" className="portifolio-cards__button">
                  {props.tag}
                </a>
                <h2 className="portifolio-cards__title">{props.title}</h2>
              </div>
            </section>
          ))}
      </div>
    </>
  );
}
