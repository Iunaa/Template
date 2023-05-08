import GlobalList from "../../molecules/GlobalList/GlobalList";
import "../Tags/tags.scss"
import logo from "../../../assets/img/vortex.png";

function Tags(){
    return(

        <div>
            <GlobalList/>
          <div className="tags container">
            
            <nav className="tags__nav">
                {/* <h5 className="tags__subtitle">Category</h5>
                <ul className="tags__list">
                    <li className="tags__item">Art Direction</li>
                    <li className="tags__item">User Interface</li>
                    <li className="tags__item"> Branding Strategy</li>
                    <li className="tags__item">Print Design</li>
                    <li className="tags__item">3D Render</li>
                </ul> */}

                <h5 className="tags__client">Client</h5>
                <img className="tags__logo" src={logo}></img>

                <h5 className="tags__date">Date</h5>
    <p className="tags__paragraph">Dec 2021</p>


            </nav>

    </div>
        </div>

    
    )
}

export default Tags