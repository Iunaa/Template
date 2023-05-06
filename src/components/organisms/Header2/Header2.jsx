import logo2 from "../../../assets/img/logo2.png"
import menu from "../../../assets/img/menu.png"
import "./header2.scss"

function Header2(){
    function changeMenu(){
       const list = ["About", "Services", "Pricing", "Blog"]
       console.log(list)
    }
    
    return(
        
        
        <div className="header2__header container">
            <picture className="header2__picture">
                <img className="header2__logo" src={logo2}></img>
            </picture>
                 
                
        <div className="header2__listContainer">
            <div className="header2__menu">
                <img className="header__hamburger" src={menu} onClick={changeMenu}></img>
            </div>
                    
            <ul className="header2__list">
                <li className="header2__listAnchor"><a>About</a></li>
                <li className="header2__listAnchor"><a>Services</a></li>
                <li className="header2__listAnchor"><a>Pricing</a></li>
                <li className="header2__listAnchor"><a>Blog</a></li>
                <li><a className="header2__anchor">Contact</a></li>
            </ul>

            


                        
                    
                    

        </div>
            
            
                
        
        
            

        
        </div>
        
    )
    
}

export default Header2