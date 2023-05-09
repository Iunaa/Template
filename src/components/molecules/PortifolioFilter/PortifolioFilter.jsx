import React, { useState } from "react";
import "./PortifolioFilter.scss";

export default function PortifolioFilter() {
  const [busca, setBusca] = useState("");
  return (
    <>
      <div className="portifolio-filterMobile">
        <div className="portifolio-filterMobile__container">
          <select
            name="selecao"
            id="filter"
            className="portifolio-filterMobile__selecao"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          >
            <option
              value="showAll"
              name="showall"
              className="portifolio-filterMobile__itens"
            >
              Show All
            </option>
            <option
              value="design"
              name="design"
              className="portifolio-filterMobile__itens"
            >
              Design
            </option>
            <option
              value="branding"
              name="branding"
              className="portifolio-filterMobile__itens"
            >
              Branding
            </option>
            <option
              value="illustration"
              name="illustration"
              className="portifolio-filterMobile__itens"
            >
              Illustration
            </option>
            <option
              value="motion"
              name="motion"
              className="portifolio-filterMobile__itens"
            >
              Motion
            </option>
          </select>
        </div>
      </div>

      <div className="portifolio-filterDesktop">
        <div>
          <p className="portifolio-filterDesktop__text">
            <a href="#" className="portifolio-filterDesktop__link">
              Show All
            </a>
          </p>
          <p className="portifolio-filterDesktop__number">14</p>
        </div>
        <div>
          <p className="portifolio-filterDesktop__text">
            <a href="#" className="portifolio-filterDesktop__link">
              Design
            </a>
          </p>
          <p className="portifolio-filterDesktop__number">6</p>
        </div>
        <div>
          <p className="portifolio-filterDesktop__text">
            <a href="#" className="portifolio-filterDesktop__link">
              Branding
            </a>
          </p>
          <p className="portifolio-filterDesktop__number">4</p>
        </div>
        <div>
          <p className="portifolio-filterDesktop__text">
            <a href="#" className="portifolio-filterDesktop__link">
              Illustration
            </a>
          </p>
          <p className="portifolio-filterDesktop__number">3</p>
        </div>
        <div>
          <p className="portifolio-filterDesktop__text">
            <a href="#" className="portifolio-filterDesktop__link">
              Motion
            </a>
          </p>
          <p className="portifolio-filterDesktop__number">1</p>
        </div>
      </div>
    </>
  );
}
