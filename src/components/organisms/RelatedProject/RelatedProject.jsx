import "../RelatedProject/relatedproject.scss";
import "../../molecules/CardRelatedItem/cardrelateditem.scss"
import sofa from "../../../assets/img/sofa.png";
import tag from "../../../assets/img/tag.png";
import tagSOFA from "../../../assets/img/tagSOFA.png";
import workmedia from "../../../assets/img/workmedia.png";
import keyboard from "../../../assets/img/keyboard.png";
import branding from "../../../assets/img/branding.png"
import CardRelatedItem from "../../molecules/CardRelatedItem/CardRelatedItem";

function RelatedProject(){
    return(
        <div className="related">
            <div className="container">
                <div className="related__allcards">
                    <h4 className="related__subtitle">Related Projects</h4>
                    <div className="related__twocards">
                        <CardRelatedItem heading="SOFA" textbtn="Design"/>
                        <CardRelatedItem heading="Work Media" textbtn="Illustration"/>  
                     
                    
                </div>
  
            </div>  
            </div>
        </div>

    )
}

export default RelatedProject