import "./PortifolioPaginacao.scss";

const list = [
  {
    number: "1",
  },
  {
    number: "2",
  },
  {
    number: "3",
  },
  {
    number: "4",
  },
  {
    number: "5",
  },
];

export default function PortifolioPaginacao(props) {
  return (
    <>
      <div className="portifolio-paginacao">
        {list.map((props) => (
          <div className="portifolio-paginacao__container">
            <button className="portifolio-paginacao__button">
              <a href="#" className="portifolio-paginacao__link">
                {props.number}
              </a>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
