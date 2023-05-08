import "../Footer2/footer2.scss";
import ContactList from "../../molecules/ContactList/ContactList.jsx";
import img4 from "../../../assets/img/img4.png";
import social from "../../../assets/img/social.png";

function Footer2(){
    const listcontainer2 = [
        {"img": img4}
    ]

    const listcontainer3 = [
        {"img": social}
    ]

    return <>
            <footer className="footer2 container">      
                 <div className="footer2__agency">
                    <h4 className="footer2__title">Agency</h4>
                    <div className="footer2__menu">
                        <h5 className="footer2__subtitle1">Menu</h5>
                            <ul className="footer2__list1">
                                <li>About</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                    </div>
                </div>
                                
                                
                <div className="footer3 container">
                    <h5 className="footer3__subtitle2">Service</h5>
                    <ul className="footer3__list2">
                        <li>Design</li>
                        <li>Development</li>
                        <li>Marketig</li>
                        <li>See More</li>
                    </ul>
                </div>

                <div className="footer3__icons">
                    <ContactList list={listcontainer3}/>
                </div>
                            
                            
                        
                <div className="footer4 container">
                    <p className="footer4__paragraph2">Copyright &copy; 2022 Laaqiq. All Rights Reserved.</p>
                    <div className="footer4__anchors">
                        <a>Terms of Use</a>
                        <a>Privacy Policy</a>
                    </div>
                </div>
                            
        </footer>

           </>
    
}

export default Footer2