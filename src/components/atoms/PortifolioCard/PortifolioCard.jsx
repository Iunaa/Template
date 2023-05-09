import SOFA from "../../../assets/img/SOFA.svg";
import KeyBoard from "../../../assets/img/KeyBoard.svg";
import DDDone from "../../../assets/img/DDDone.svg";
import WorkMedia from "../../../assets/img/WordMedia.svg";
import HandP from "../../../assets/img/HandP.svg";
import "./portifolioCard.scss";

const list = [
  {
    img: KeyBoard,
    button: "Design",
    title: "KeyBoard",
  },
  {
    img: SOFA,
    button: "Design",
    title: "SOFA",
  },
  {
    img: DDDone,
    button: "Branding",
    title: "DDDone",
  },
  {
    img: WorkMedia,
    button: "Illustration",
    title: "Work Media",
  },
  {
    img: HandP,
    button: "Branding",
    title: "HandP",
  },
];
console.log(list);

export default function PortifolioCard(props) {
  return (
    <>
      <div className="portifolio-cards">
        {list.map((props) => (
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
                {props.button}
              </a>
              <h2 className="portifolio-cards__title">{props.title}</h2>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
