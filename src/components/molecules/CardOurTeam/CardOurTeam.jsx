import "./cardOurTeam.scss"

export default function CardOurTeam({ img, name, office }) {
  const ourTeamClass = 'our-team';
  return (
    <a className={`${ourTeamClass}__card`}>
      <div className={`${ourTeamClass}__img`}>
        <img src={`${img.src}`} alt={`${img.alt}`} />
      </div>
      <p className={`title--4-white ${ourTeamClass}__name`}>{name}</p>
      <p className={`text--gray ${ourTeamClass}__role`}>{office}</p>
    </a>
  )
}