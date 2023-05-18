import "./cardOurTeam.scss"

export default function CardOurTeam({ img, name, office }) {
  const classOurTeam = 'our-team';

  return (
    <a className={`${classOurTeam}__card`} href="#">
      <div className={`${classOurTeam}__img`}>
        <img src={`${img.src}`} alt={`${img.alt}`} />
      </div>
      <p className={`${classOurTeam}__name text--h4 text--white`}>{name}</p>
      <p className={`${classOurTeam}__role text text--gray`}>{office}</p>
    </a>
  )
}
