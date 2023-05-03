import "./service-list.scss"

export default function ServiceList(props){
  return (
    <article className="service__card">
      <picture className="service__picture">
        <img
          className="service__icon"
          src={props.img}
          alt={`${props.title} icon`}
        />
      </picture>
      <h4 className="title--4 service__topic">{props.title}</h4>
      <p className="text service__paragraph">{props.paragraph}</p>
      <a className="service__anchor" href="#">{props.anchor}</a>
    </article>
    )         
}