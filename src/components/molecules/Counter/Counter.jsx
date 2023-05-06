import "./counter.scss"

import design from "../../../assets/img/design.svg"
import development from "../../../assets/img/development.svg"
import marketing from "../../../assets/img/marketing.svg"

export default function Counter({ experience, members, projects }) {
  const [ experienceCreate, experienceIcon ] = experience;
  const [ membersCreate, membersIcon ] = members;
  const [ projectsCreate, projectsIcon ] = projects;

  return (
    <div className="container">
      <div className="counter">
        {experienceCreate == true && (
          <div className={`counter__counterItem ${experienceIcon == true ? "counter__counterItem--icon" : ""}`}>
            {experienceIcon == true && (<img src={design} alt="" />)}
            <div>
              <p className="title--3">42%</p>
              <p>Years of experience</p>
            </div>
          </div>
        )}

        {membersCreate == true && (
          <div className={`counter__counterItem ${experienceIcon == true ? "counter__counterItem--icon" : ""}`}>
            {membersIcon == true && (<img src={development} alt="" />)}
            <div>
              <p className="title--3">73+</p>
              <p>Agency members</p>
            </div>
          </div>
        )}

        {projectsCreate == true && (
          <div className={`counter__counterItem ${experienceIcon == true ? "counter__counterItem--icon" : ""}`}>
            {projectsIcon == true && (<img src={marketing} alt="" />)}
            <div>
              <p className="title--3">5.000</p>
              <p>Projects complete</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
