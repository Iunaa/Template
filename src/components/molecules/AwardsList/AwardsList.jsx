// export default function AwardsList(props) {
//   return (
//     <>
//       <h1>{JSON.stringify(titulo)}</h1>
//       <h2>{cor}</h2>
//     </>
//   );
// }
const list = [
  {
    image: "",
    title: "SOFA",
    date: "25 Oct, 2021",
    company: "Awwwards",
    imageCompany: "",
  },
  {
    image: "",
    title: "KeyBoard",
    date: "10 Oct, 2021",
    company: "CSS Design Awards",
    imageCompany: "",
  },
  {
    image: "",
    title: "Word Media",
    date: "7 Oct, 2021",
    company: "The FWA",
    imageCompany: "",
  },
];
console.log(list);

export default function AwardsList(props) {
  return (
    <>
      {list.map((props) => (
        <div className="awards">
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
        </div>
      ))}
    </>
  );
}
