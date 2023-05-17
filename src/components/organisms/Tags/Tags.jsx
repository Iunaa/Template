import GlobalList from "../../molecules/GlobalList/GlobalList";
import "../Tags/tags.scss"
import logo from "../../../assets/img/vortex.png";

function Tags(){
    return(
        <div className="tags__background">

            <div className="tags container">
                 <GlobalList/>
                
                <nav className="tags__nav2">
                   

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