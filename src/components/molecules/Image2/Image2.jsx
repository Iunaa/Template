import "../Image2/image2.scss"
import ContactList from "../../molecules/ContactList/ContactList.jsx";
import img4 from "../../../assets/img/img4.png"

function Image2(){


     const listcontainer2 = [
        {"img": img4}
    ]
    return(
        <div className="image2__background">
         <div className=" container">
            <div className="image2">
             <ContactList list={listcontainer2}/>
                <div className="image2__text">
                    <h3 className="image2__subtitle">Help To Build Your Dream Project</h3>
                    <p className="image2__paragraph">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <button className="image2__button">Contact Now</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Image2