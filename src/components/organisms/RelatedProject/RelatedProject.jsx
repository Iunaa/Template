import "../RelatedProject/relatedproject.scss";
import sofa from "../../../assets/img/sofa.png";
import tag from "../../../assets/img/tag.png";
import tagSOFA from "../../../assets/img/tagSOFA.png";
import workmedia from "../../../assets/img/workmedia.png";
import keyboard from "../../../assets/img/keyboard.png";
import branding from "../../../assets/img/branding.png"

function RelatedProject(){
    return(
        <div className="related">
            <div className="container">
                <h4 className="related__subtitle">Related Projects</h4>
            <div className="related__card1">
                <p className="related__design">Design</p>
                <p className="related__sofa">SOFA</p>
            </div>
            
                
                
               
            

            <div className="related__card2">
                <p className="related__branding">Branding</p>
                <p className="related__keyboard">KeyBoard</p>
                
                
            </div>
           
          </div>
        </div>

    )
}

export default RelatedProject