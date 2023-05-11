import "./gridImages.scss";
import bitmap4 from "../../../assets/img/Bitmap4.png";
import bitmap5 from "../../../assets/img/Bitmap5.png";
import bitmap6 from "../../../assets/img/Bitmap6.png";
import bitmap7 from "../../../assets/img/Bitmap7.png";
import bitmap8 from "../../../assets/img/Bitmap8.png";


function GridImages(){
    return(
        <div className="grid5">
          <div className="container">
            <div className="grid5__images">

                    <picture className="grid5__picture">
                        <img className="grid5__image1" src={bitmap4}></img>
                    
                    </picture>
                
            
            
                <picture className="grid5__picture2">
                    <img className="grid5__img1" src={bitmap5}></img>
                    <img className="grid5__img2" src={bitmap6}></img>
                    <img className="grid5__img3" src={bitmap7}></img>
                    <img className="grid5__img4" src={bitmap8}></img>

                </picture>
            
            </div>
          </div>
        </div>

    )
}

export default GridImages