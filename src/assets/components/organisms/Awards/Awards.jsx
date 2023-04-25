export default function TitleAwards() {
  return (
    <>
      <h3>Awards!</h3>;
    </>
  );
}

export function ListAwards({ props }) {
  return (
    <>
      <div>
        <section>
          <div>
            <picture>
              <img src={props.img} alt="image Awards" />
            </picture>
            <p>{props.title}</p>
          </div>
          <p>{props.date}</p>
          <div>
            <p>{props.company}</p>
            <picture>
              <img src={props.img} alt="logo company" />
            </picture>
          </div>
        </section>
      </div>
    </>
  );
}
