import "../Solution/solution.scss";
import social from "../../../assets/img/social.png";

function Solution(){
    return(
        <div className="solution container">
            <h3 className="solution__subtitle">Solution</h3>
            <p className="solution__paragraph">Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
               <br/>
               <br/>
               Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
            <p className="solution__share">SHARE ON</p>
            <picture className="solution__icon">
            <img className="solution__icons" src={social}></img>
            </picture>

        </div>
    )
}

export default Solution