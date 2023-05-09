import "./card-pricing.scss"

export default function CardPricing({ data }) {
  const pricingCardClass = "pricing__card";
  const pricingCardClassPopular = "pricing__card--popular";
  let topicClassEnable = "pricing__item text--brown-dark";
  let topicClassDisabled = "pricing__item pricing__item--disabled text";

  return (
    <>
      {data.map((cur, idx) => (
        <div key={idx} className={`${pricingCardClass} ${cur.popular ? `${pricingCardClassPopular}` : ""}`}>
          <header className={`headings--reverse3 ${pricingCardClass}-header} ${cur.popular ? `${pricingCardClass}-header--popular` : ""}`}>
            <h4 className="title title--2">{cur.title}</h4>
            <h5 className="title title--5">{cur.subtitle}</h5>
          </header>

          <p className="text">{cur.paragraph}</p>
          
          <ul className="pricing__items">
            <li className={`${cur.topics[0] == "enable" ? topicClassEnable : topicClassDisabled}`}>Brand Design</li>
            <li className={`${cur.topics[1] == "enable" ? topicClassEnable : topicClassDisabled}`}>Market Analysis</li>
            <li className={`${cur.topics[2] == "enable" ? topicClassEnable : topicClassDisabled}`}>Production</li>
          </ul>

          <a href="#" className={`${cur.popular ? "pricing__button--orange" : "pricing__button--white"}`}>contact us</a>
        </div>
      ))}
    </>
  )
}