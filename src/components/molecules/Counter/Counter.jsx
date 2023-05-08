import "./counter.scss"

export default function Counter(props) {
  const { data, background="secondary" } = props;

  return (
    <div className={`counter__background--${background}`}>
      <div className="container">
        <div className="counter">

          {data.map((cur) => (
            <div className={`counter__counterItem ${cur.icon && "counter__counterItem--icon"}`}>
              {cur.icon && (<img src={cur.icon.src} className="icon__card" alt={cur.icon.alt} />)}
              <div>
                <p className="title--3">{cur.title}</p>
                <p>{cur.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
