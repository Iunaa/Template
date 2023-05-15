import "./counterStatistics.scss"

export default function CounterStatistics({ data, background="secondary" }) {
  return (
    <div className={`counter counter--${background}`}>
      <div className="container">
        <div className="counter__items"> 
          {data.map((cur, idx) => (
            <div key={idx} className={`counter__item${cur.icon ? " counter__item--icon": ""} ${`counter__item--${cur.background}`}`}>
              {cur.icon && (<img src={cur.icon.src} className="icon__card" alt={cur.icon.alt} />)}
              <div className="counter__text">
                <p className="text--h3">{cur.title}</p>
                <p className="text--big text--brown-dark">{cur.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
