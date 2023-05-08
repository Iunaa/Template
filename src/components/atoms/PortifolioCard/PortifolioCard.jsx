import SOFA from "../../../assets/img/SOFA.svg";
import KeyBoard from "../../../assets/img/KeyBoard.svg";
import DDDone from "../../../assets/img/DDDone.svg";
import WorkMedia from "../../../assets/img/WordMedia.svg";
import HandP from "../../../assets/img/HandP.svg";

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
      {list.map((props) => (
        <div>
          <picture>
            <img src={props.img} alt="image card" />
          </picture>
          <a href="#">{props.button}</a>
          <h2>{props.title}</h2>
        </div>
      ))}
    </>
  );
}
