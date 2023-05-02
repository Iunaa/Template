// export default function AwardsList(props) {
//   return (
//     <>
//       <h1>{JSON.stringify(titulo)}</h1>
//       <h2>{cor}</h2>
//     </>
//   );
// }
import SOFA from "../../../assets/img/logo.png";
// import KeyBoard from "../../../assets/img/logo.png";
// import WorkMedia from "../../../assets/img/logo.png";
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
    image: "",
    title: "KeyBoard",
    date: "10 Oct, 2021",
    company: "CSS Design Awards",
    imageCompany: CSSdesign,
  },
  {
    image: SOFA,
    title: "Word Media",
    date: "7 Oct, 2021",
    company: "The FWA",
    imageCompany: TheFWA,
  },
];
console.log(list);

export default function AwardsList(props) {
  return (
    <>
      <div className="awards">
        <div className="container">
          <h3 className="awards__titlePage">Awards</h3>
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
          <p className="awards__footer">
            Want more awards?
            <a href="#" className="awards__footerLink">
              Explore Now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
