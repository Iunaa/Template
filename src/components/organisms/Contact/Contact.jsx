
function Contact(){
    return(
        <div className="container">
          <section>
            <article className="article1 container">
                <h3 className="article1__subtitle">NewSletter</h3>
                    <label className="article1__label">
                        <input className="article1__input" type="email" placeholder="Your email" name="email"></input>
                        <a className="article1__anchor">Subscribe</a>
                    </label>
                    
            </article>
            

                <article className="article2 container">
                    <div className="article2__form">
                        <h4 className="article2__subtitle">Get In Touch</h4>
                        <label className="article2__label">
                            <input className="article2__email" type="email" placeholder="Your email" name="email"></input>
                            <select className="article2__select" name="Subject" placeholder="Subject">Subject</select>
                            <textarea className="article2__textarea" placeholder="Message" cols={60} rows={5}></textarea>
                            
                        </label>
                        <button className="article2__button">Submit Now</button>

                    </div>
                </article>

                <article className="article3 container">
                    <div className="article3__contact">
                        <h5 className="article3__h5">Contact</h5>
                        <h3 className="article3__subtitle">Contact Me</h3>
                        <p className="article3__paragraph">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        
                    </div>
                </article>

                <article className="article4 container">
                    

                </article>
            </section>

            



        </div>
    )
}

export default Contact