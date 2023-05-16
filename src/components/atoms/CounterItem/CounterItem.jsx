import "./counterItem.scss"

export default function CounterItem({ title, text, icon, background }) {
  return (
    <div className={`counter__item${icon ? " counter__item--icon": ""} ${`counter__item--${background}`}`}>
      {icon && (<img src={icon.src} className="icon__card" alt={icon.alt} />)}
      <div className="counter__text">
        <p className="text--h3">{title}</p>
        <p className="text--big text--brown-dark">{text}</p>
      </div>
    </div>
  )
}