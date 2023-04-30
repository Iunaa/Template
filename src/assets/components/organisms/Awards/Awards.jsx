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

export default function Awards(props) {
  return (
    <>
      {list.map((props) => (
        <div>
          <section>
            <div>
              <picture>
                <img src={props.image} alt="image Awards" />
              </picture>
              <p>{props.title}</p>
            </div>
            <p>{props.date}</p>
            <div>
              <p>{props.company}</p>
              <picture>
                <img src={props.imageCompany} alt="logo company" />
              </picture>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
