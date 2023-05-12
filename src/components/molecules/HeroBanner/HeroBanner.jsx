import "./heroBanner.scss"

export default function HeroBanner({ text, img, style }) {
  let { 
    title, 
    tag, 
    paragraph="Agency provides a full service range including technical skills, design, business understanding.", 
    button 
  } = text;

  return (
    <>
      <main className="hero">
        <div className="container">
          <div className={`${style ? `hero__container--${style}`: "hero__container "}`}>
            {img && (
              <div className="hero__container-img">
                <img className="hero__img" src={img} alt=""></img>
              </div>
            )}
            
            <div className="hero__text">
              <header className="hero__titles headings--reverse1">
                <h1 className={`hero__title ${style && `hero__title--${style}`} title--1 title--1--white`}>{title}</h1>
                {tag && <h2 className="title title--5">{tag}</h2>}
              </header>
              <p className={`hero__paragraph ${style && `hero__paragraph--${style}`} text text--gray`}>{paragraph}</p>
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
    </>
  )
}