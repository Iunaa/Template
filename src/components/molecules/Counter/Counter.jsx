import "./counter.scss"

export default function Counter(props) {
  const { data, background="secondary" } = props;
  let lengthData = `--${data.length}`

  return (
    <div className={`counter__background--${background}`}>
      <div className="container">
        <div className="counter">
          {console.log(data)}

          {data.map((cur) => (
            <div className={`counter__counterItem${lengthData} ${cur.icon && "counter__counterItem--icon"}`}>
              {cur.icon && (<img src={cur.icon.src} className="icon__card" alt={cur.icon.alt} />)}
              <div className="counter__text">
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
