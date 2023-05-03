import "./features.scss"
import development from "../../../assets/img/development.svg"

export default function Features(props) {
  return (
    <div className="container">
      <section className="features">
        <div>
          <header className="headings--reverse3 features__title">
            <h2 className="title--3 title--3--white">Custom Web Design</h2>
            <h3 className="title--5">Features</h3>
          </header>

          <a className="features__anchor text--white" href="#">Read More</a>
        </div>

        <div className="features__cards">
          <div className="features__professional">
            <img className="features__icon" src={development} alt="icon" />
            <h4 className="title--4 features__topic">Professional</h4>
            <p className="text features__paragraph">Full service range including technical skills, design.</p>
          </div>

          <div className="features__accessibility">
            <h4 className="title--4 title--4--white features__topic">Accessibility</h4>
            <p className="text--gray features__paragraph">Business understanding, ability to put themselves.</p>
          </div>
        </div>
      </section>
    </div>
  )
}