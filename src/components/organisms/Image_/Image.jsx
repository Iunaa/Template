import "../Image_/image.scss";
import bitmap from "../../../assets/img/Bitmap3.png";

function Image(){
    return(
        <picture className="image container">
        <img className="image__img" src={bitmap}></img>
        </picture>

    )
}

export default Image