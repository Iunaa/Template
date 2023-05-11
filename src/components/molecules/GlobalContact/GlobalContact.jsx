import "../GlobalContact/globalcontact.scss"
import ContactList from "../ContactList/ContactList.jsx";
import img4 from "../../../assets/img/img4.png"

function GlobalContact(){


     const listcontainer2 = [
        {"img": img4}
    ]
    return(
        <div className="globalcontact__background">
         <div className=" container">
            <div className="globalcontact">
             <ContactList list={listcontainer2}/>
                <div className="globalcontact__text">
                    <h3 className="globalcontact__subtitle">Help To Build Your Dream Project</h3>
                    <p className="globalcontact__paragraph">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <button className="globalcontact__button">Contact Now</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default GlobalContact