function Pricing(){
    return(
        <>
            <section className="pricing">
                <div className="container">
                    <header className="headings--reverse2">
                        <h2 className="title--2 pricing__title">Check Our Pricing Plans</h2>
                        <h3 className="title--5">Pricing</h3>

                    </header>
                    <div id="pricingCards" className="pricing__cards">
                        <CardPricing
                            data={pricingCardsData}
                        />
                    </div>
                </div>

            </section>
        </>
    )
}