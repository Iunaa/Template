// export default function AwardsList(props) {
//   return (
//     <>
//       <h1>{JSON.stringify(titulo)}</h1>
//       <h2>{cor}</h2>
//     </>
//   );
// }

export default function Awards(props) {
  return (
    <>
      {props.map((props) => (
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
