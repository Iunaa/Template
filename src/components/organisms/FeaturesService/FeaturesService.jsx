import "./featuresService.scss"
import FeaturesCard from "../../molecules/FeaturesCard/FeaturesCard";

export default function FeaturesService({ text, cardStyle, firstCard, lastCard }) {
  const { title, paragraph, description, link } = text;

  const classFeaturesService = {
    title: `text--h3 ${cardStyle == "primary" && "text--white"}`,
    link: `features__anchor ${cardStyle == "primary" ? "text--white" : "text--brown-dark"} ${link && link.style}`,
    paragraph: `text text--big ${cardStyle == "primary" ? "text--white" : "text--brown-dark"}`,
    description: `text ${cardStyle == "primary" ? "text--gray" : "text"}`,
    cards: `features__cards`,
    cardBorder: firstCard.imgSrc !== lastCard.imgSrc && `features__card--border`,
  };

  return (
    <section className={`features features--${cardStyle}`}>
      <div className="container">
        <div className="features__container">
          <div className="features__text">
            <header className="headings--reverse3 features__title">
              {title && (<h2 className={classFeaturesService.title}>Custom Web Design</h2>)}
              <h3 className="text--h5">Features</h3>
            </header>

            {link && (<a className={classFeaturesService.link} href={link.src}>{link.content}</a>)}

            <div className="features__paragraph-description">
              {paragraph && (<p className={classFeaturesService.paragraph}>{paragraph}</p>)}
              {description && (<p className={classFeaturesService.description}>{description}</p>)}
            </div>
          </div>
        
          <div className={classFeaturesService.cards}>
            <FeaturesCard 
              img={firstCard.imgSrc}
              title={firstCard.title} 
              paragraph={firstCard.paragraph}
              cardStyle={cardStyle}
              styleBorder={classFeaturesService.cardBorder}
            />

            <FeaturesCard 
              img={lastCard.imgSrc}
              title={lastCard.title} 
              paragraph={lastCard.paragraph}
              cardStyle={cardStyle}
              styleBorder={classFeaturesService.cardBorder}
            />
          </div>
        </div>
      </div>
    </section>
  )
}