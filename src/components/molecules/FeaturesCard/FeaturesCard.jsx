import "./featuresCard.scss"

export default function FeaturesCard({img, title, paragraph, cardStyle }) {
  const classCard = img ? `features__with-icon features__with-icon--${cardStyle}` : `features__no-icon features__no-icon--${cardStyle}`;
  const classTitle = img ? "" : cardStyle == "primary" ? "text--white" : "";
  const classParagraph = img ? "" :cardStyle == "primary" ? "text--gray" : "";

  return (
    <div className={classCard}>
      {img && (
        <div>
          <img className="features__icon" src={img} alt="" />
        </div>
      )}
      <div className="features__text-card">
        <h4 className={`features__topic text--h4 ${classTitle}`}>{title}</h4>
        <p className={`features__topic text ${classParagraph}`}>{paragraph}</p>
      </div>
    </div>
  )
}