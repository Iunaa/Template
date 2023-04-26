import "../../../components/main.scss"
import menu from "../../../assets/img/pic.png"

function Webflow(){
    return(
        <div className="webflow container">
            <img className="webflow__firstImage" src={menu}></img>
                <section className="webflow__firstSection">
                    <h5 className="webflow__subtitle">Webflow Expert</h5> 
                    <h1 className="webflow__title">Making Digital Products</h1>
                    <p className="webflow__paragraph">Agency provides a full service range including technical skills, design, business understanding.</p>
                    <div className="webflow__contact">
                        <button className="webflow__button">Explore work</button>
                        <a className="webflow__webAnchor">Contact me</a>
                    </div>

                </section>


        </div>

    )
}

export default Webflow