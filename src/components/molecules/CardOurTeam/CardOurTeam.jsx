import "./cardOurTeam.scss"

export default function CardOurTeam({ img, name, office }) {
  const ourTeamClass = 'our-team';
  return (
    <a className={`${ourTeamClass}__card`}>
      <div className={`${ourTeamClass}__img`}>
        <img src={`${img.src}`} alt={`${img.alt}`} />
      </div>
      <p className={`${ourTeamClass}__name text--h4 text--white`}>{name}</p>
      <p className={`${ourTeamClass}__role text text--gray`}>{office}</p>
    </a>
  )
}