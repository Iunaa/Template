import "./PortifolioFooter.scss";

export default function PortifolioFooter() {
  return (
    <>
      <div className="portifolio-footer">
        <div className="portifolio-footer__container">
          <h4 className="portifolio-footer__title">Agency</h4>
          <section className="portifolio-footer__column">
            <h5 className="portifolio-footer__titleList">Menu</h5>
            <ul className="portifolio-footer__list">
              <li className="portifolio-footer__itens">About</li>
              <li className="portifolio-footer__itens">Services</li>
              <li className="portifolio-footer__itens">Blog</li>
              <li className="portifolio-footer__itens">Contact</li>
            </ul>
          </section>
          <section className="portifolio-footer__column">
            <h5 className="portifolio-footer__titleList">Service</h5>
            <ul className="portifolio-footer__list">
              <li className="portifolio-footer__itens">Design</li>
              <li className="portifolio-footer__itens">Development</li>
              <li className="portifolio-footer__itens">Marketing</li>
              <li className="portifolio-footer__itens">See More</li>
            </ul>
          </section>
        </div>
        <picture className="portifolio-footer__picture">
          <img
            src=""
            alt="Image social.svg"
            className="portifolio-footer__image"
          />
        </picture>
      </div>
    </>
  );
}
