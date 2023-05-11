import { useState } from "react";
import PortifolioCard from "../../molecules/PortifolioCard/PortifolioCard";
import PortifolioCardItems from "../../../database/PortifolioCardsItems.json";

const list = PortifolioCardItems;
console.log(list);

export default function PortifolioCardsWrapper() {
  const [selectTag, setSelectTag] = useState("");
  const handleTagChange = (ev) => {
    setSelectTag(ev.target.value);
  };
  return (
    <>
      <div className="portifolio-filter">
        <div className="portifolio-filter__container">
          <select
            name="selecao"
            id="filter"
            className="portifolio-filter__selecao"
            onChange={handleTagChange}
          >
            <option
              value=""
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
      <section>
        {list
          .filter(
            (card) => card.tag.toLowerCase() === selectTag || selectTag === ""
          )
          .map((card, index) => (
            <PortifolioCard
              key={index}
              img={card.img}
              tag={card.tag}
              title={card.title}
            />
          ))}
      </section>
    </>
  );
}
