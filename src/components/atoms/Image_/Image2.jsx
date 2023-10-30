 
 import "../../atoms/Image_/image.scss"
 import bitmap3 from "../../../assets/img/bitmap3.png"
 function Image2(){
 return(
         <div className="image">
 
            <picture className="container">
            <img className="image__img" src={bitmap3}></img>
            </picture>
        </div>
 )

 }

 export default Image2