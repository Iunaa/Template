import "../Contact/contact.scss";
import ContactList from "../../molecules/ContactList/ContactList.jsx";
import img1 from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import social from "../../../assets/img/social.png";

function Contact(){
    return(
        
          <section className="contact">
            <div className="container">
            <article className="article1">
                <h3 className="article1__subtitle">NewSletter</h3>
                    <label className="article1__label">
                        <input className="article1__input" type="email" placeholder="Your email" name="email"></input>
                        <a className="article1__anchor">Subscribe</a>
                    </label>
                    
            </article>
            

                <article className="article2">
                    
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
               

                <article className="article3">
                    <div className="article3__contact">
                        <h5 className="article3__h5">Contact</h5>
                        <h3 className="article3__subtitle">Contact Me</h3>
                        <p className="article3__paragraph">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        
                    </div>
                    
                </article>

                <article className="article4">
                    <div className="article4__information">
                        <ContactList  img={img1} paragraph1="2247 Lunetta Street, TX 76301"/>
                        <ContactList  img={img2} paragraph2="+1 (234) 567-89-00"/>
                        <ContactList  img={img3} paragraph3="info@agency.com"/>
                        
                    </div>
                    

                </article>

                <article className="article5">
                    <div className="article5__Help">
                        <ContactList img={img4}/>
                        <div>
                        <h3 className="article5__subtitle">Help To Build Your Dream Project</h3>
                        <p className="article5__paragraph">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <button className="article5__button">Contact Now</button>
                    </div>
                    </div>

                </article>

                <article className="article6">
                    <div className="article6__webflow">
                        <h4 className="article6__title">Webflow</h4>
                        <h5 className="article6__subtitle1">Menu</h5>
                        <ul className="article6__list1">
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>

                        <h5 className="article6__subtitle2">Service</h5>
                        <ul className="article6__list2">
                            <li>Design</li>
                            <li>Development</li>
                            <li>Marketig</li>
                            <li>See More</li>
                        </ul>

                        
                    </div>
                    <div className="article6__icons">
                        <ContactList img={social}/>
                    </div>


                </article>
            </div>

            </section>

            



        
    )
}

export default Contact