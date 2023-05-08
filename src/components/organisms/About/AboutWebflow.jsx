import "./about-webflow.scss"
import imgAboutWebflow from "../../../assets/img/about-webflow.svg";

export default function AboutWebflow() {
  return (
    <section className="about-webflow container">
      <div className="about-webflow__container-img">
        <img className="about-webflow__img" src={imgAboutWebflow} alt="" />
      </div>

      <div className="about-webflow__text">
        <header className="headings--reverse3 about-webflow__title">
          <h2 className="title--3 title--3--white">Website Without The Dev Time</h2>
          <h3 className="title--5">About Webflow</h3>
        </header>
        <p className="about-webflow__subtitle text--white text--big">Provides a full service range</p>
        <p className="about-webflow__paragraph text--gray">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>

        <a className="about-webflow__button--purple">About Webflow</a>
      </div>
    </section>
  )
}