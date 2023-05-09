// export default function AwardsList(props) {
//   return (
//     <>
//       <h1>{JSON.stringify(titulo)}</h1>
//       <h2>{cor}</h2>
//     </>
//   );
// }
import SOFA from "../../../assets/img/Awards1.svg";
import KeyBoard from "../../../assets/img/Awards2.svg";
import WorkMedia from "../../../assets/img/Awards3.svg";
import Awwwards from "../../../assets/img/logoAwwwards-awards.svg";
import CSSdesign from "../../../assets/img/logoCSS-awards.svg";
import TheFWA from "../../../assets/img/logoTheFWA-awards.svg";

const list = [
  {
    image: SOFA,
    title: "SOFA",
    date: "25 Oct, 2021",
    company: "Awwwards",
    imageCompany: Awwwards,
  },
  {
    image: KeyBoard,
    title: "KeyBoard",
    date: "10 Oct, 2021",
    company: "CSS Design Awards",
    imageCompany: CSSdesign,
  },
  {
    image: WorkMedia,
    title: "Work Media",
    date: "7 Oct, 2021",
    company: "The FWA",
    imageCompany: TheFWA,
  },
];
console.log(list);

export default function AwardsList(props) {
  return (
    <>
      {list.map((props) => (
        <section className="awards__container">
          <div className="awards__itens">
            <picture className="awards__picture">
              <img
                src={props.image}
                alt="image Awards"
                className="awards__image"
              />
            </picture>
            <p className="awards__titleItens">{props.title}</p>
          </div>
          <p className="awards__date">{props.date}</p>
          <div className="awards__company">
            <p className="awards__comapanyName">{props.company}</p>
            <picture className="awards__pictureCompany">
              <img
                src={props.imageCompany}
                alt="logo company"
                className="awards__imageCompany"
              />
            </picture>
          </div>
        </section>
      ))}
    </>
  );
}