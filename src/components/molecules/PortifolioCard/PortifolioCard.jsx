import "./portifolioCard.scss";

export default function PortifolioCard({ img, tag, title }) {
  return (
    <>
      <article className="portifolio-cards">
        <div className="portifolio-cards__items">
          <picture className="portifolio-cards__picture">
            <img
              src={img}
              alt="image card"
              className="portifolio-cards__image"
            />
          </picture>
          <div className="portifolio-cards__text">
            <a href="#" className="portifolio-cards__tag">
              {tag}
            </a>
            <h2 className="portifolio-cards__title">{title}</h2>
          </div>
        </div>
      </article>
    </>
  );
}
