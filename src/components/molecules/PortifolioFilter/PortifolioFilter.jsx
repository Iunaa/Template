import React, { useState } from "react";
import "./PortifolioFilter.scss";

export default function PortifolioFilter() {
  const [busca, setBusca] = useState("");
  return (
    <>
      <div className="portifolio-filter">
        <div className="portifolio-filter__container">
          <select
            name="selecao"
            id="filter"
            className="portifolio-filter__selecao"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          >
            <option
              value="showAll"
              name="showall"
              className="portifolio-filter__itens"
            >
              Show All
            </option>
            <option
              value="design"
              name="design"
              className="portifolio-filter__itens"
            >
              Design
            </option>
            <option
              value="branding"
              name="branding"
              className="portifolio-filter__itens"
            >
              Branding
            </option>
            <option
              value="illustration"
              name="illustration"
              className="portifolio-filter__itens"
            >
              Illustration
            </option>
            <option
              value="motion"
              name="motion"
              className="portifolio-filter__itens"
            >
              Motion
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
