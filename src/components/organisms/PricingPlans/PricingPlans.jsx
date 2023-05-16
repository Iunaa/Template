import CardPricing from "../../molecules/CardPricing/CardPricing"
import "./pricingPlans.scss"

export default function PricingPlans(){
  return(
    <>
      <section className="pricing">
        <div className="container">
          <header className="headings--reverse2">
            <h2 className="title title--2 pricing__title">Explore Pricing Plans</h2>
            <h3 className="title title--5">Pricing</h3>
          </header>

          <div id="pricingCards" className="pricing__cards">
            <CardPricing data={pricingCardsData}/>
          </div>
        </div>
      </section>
    </>
  )
}

const pricingCardsData = [
  {
    title: "Free",
    subtitle: "Consultation",
    paragraph: "Your digital marketing efforts, instead of handling in-house.",
    popular: false,
    topics: ["enable", "disabled", "disabled"],
  },
  {
    title: "$1500",
    subtitle: "Design",
    paragraph: "Provide your business with a variety of digital solutions to promote.",
    popular: true,
    topics: ["enable", "enable", "disabled"],
  },
  {
    title: "$2900",
    subtitle: "Design+Code",
    paragraph: "Help you hit your marketing goals and grow your business.",
    popular: false,
    topics: ["enable", "enable", "enable"],
  }
]