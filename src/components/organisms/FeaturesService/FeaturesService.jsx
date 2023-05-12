import "./featuresService.scss"
import development from "../../../assets/img/development.svg"

export default function FeaturesService({ text, cardStyle }) {
  let { title, paragraph, description, link } = text;

  return (
    <div className={`features__background--${cardStyle}`}>
      <div className="container">
        <section className="features">
          <div className="features__text">
            <header className="headings--reverse3 features__title">
              {title && (<h2 className={`title--3 ${cardStyle == "primary" && "title--3 title--3--white"}`}>Custom Web Design</h2>)}
              <h3 className="title--5">Features</h3>
            </header>

            {link && (<a className={`features__anchor ${cardStyle == "primary" ? "text--white" : "text--brown-dark"} ${link.style}`} href={link.src}>{link.content}</a>)}

            <div className="features__paragraph-description">
              {paragraph && (<p className={`text--big ${cardStyle == "primary" ? "text--white" : "text--brown-dark"}`}>{paragraph}</p>)}
              {description && (<p className={`text ${cardStyle == "primary" ? "text--gray" : "text"}`}>{description}</p>)}
            </div>
          </div>

          <div className={`features__cards features__cards--${cardStyle}`}>
            <div className={`features__professional features__professional--${cardStyle}`}>
              <img className="features__icon" src={development} alt="icon" />
              <h4 className="title--4 features__topic">Professional</h4>
              <p className="features__paragraph text">Full service range including technical skills, design.</p>
            </div>

            <div className={`features__accessibility features__accessibility--${cardStyle}`}>
              <h4 className={`title--4 ${cardStyle == "primary" && "title--4 title--4--white"} features__topic`}>Accessibility</h4>
              <p className={`features__paragraph ${cardStyle == "primary" ? "text--gray" : "text"}`}>Business understanding, ability to put themselves.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}