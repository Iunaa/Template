import "./heroBanner.scss"

export default function HeroBanner({ text, img, style }) {
  const { 
    title, 
    tag, 
    paragraph="Agency provides a full service range including technical skills, design, business understanding.", 
    button 
  } = text;

  const classHeroBanner = {
    container: `${style ? `hero__container--${style}`: "hero__container "}`,
    title: `hero__title ${style && `hero__title--${style}`} text--h1 text--white`,
    paragraph: `hero__paragraph ${style && `hero__paragraph--${style}`} text text--gray`,
  }

  return (
    <main className="hero">
      <div className="container">
        <div className={classHeroBanner.container}>
          {img && (
            <div className="hero__container-img">
              <img className="hero__img" src={img} alt=""></img>
            </div>
          )}
          
          <div className="hero__text">
            <header className="hero__titles headings--reverse1">
              <h1 className={classHeroBanner.title}>{title}</h1>
              {tag && <h2 className="text--h5">{tag}</h2>}
            </header>
            <p className={classHeroBanner.paragraph}>{paragraph}</p>
            {button && (
              <div className="hero__buttons">
                {button.map((cur) => (
                  <a href="#" className={cur.style}>{cur.text}</a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
