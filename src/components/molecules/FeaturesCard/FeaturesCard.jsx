import "./featuresCard.scss"

export default function FeaturesCard({img, title, paragraph, styleBorder, cardStyle }) {
  const classFeaturesCard = {
    card:`features__card ${img ? `features__card-with-icon features__card-with-icon--${cardStyle} ${styleBorder}` : `features__card-no-icon features__card-no-icon--${cardStyle}`}`,
    title: img ? "" : cardStyle == "primary" ? "text--white" : "",
    paragraph: img ? "" :cardStyle == "primary" ? "text--gray" : "",
  };

  return (
    <div className={classFeaturesCard.card}>
      {img && (
        <div>
          <img className="features__icon" src={img} alt="" />
        </div>
      )}
      <div className="features__text-card">
        <h4 className={`features__topic text--h4 ${classFeaturesCard.title}`}>{title}</h4>
        <p className={`features__topic text ${classFeaturesCard.paragraph}`}>{paragraph}</p>
      </div>
    </div>
  )
}