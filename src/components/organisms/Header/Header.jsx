import logo from "../../../assets/img/logo.png"
import menu from "../../../assets/img/menu.png"
import "./header.scss"
function Header(){
    return(
        
        
        <div className="header container">
            <nav  className="header__nav-container" >
                <picture className="header__picture">
                    <img className="header__logo" src={logo}></img>
                </picture>
                 

              <div className="header__menu-container">
                <div className="header__menu" onClick="changeMenu(itens)">
               
                </div>
                
                <div className="header__list">
                  
                    <ul id="itens">
                        <li><a>About</a></li>
                        <li><a>Services</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Blog</a></li>
                        <li><a className="header__anchor">Contact</a></li>
                    </ul>

                    
                  
                </div>

                
            </div>
            <img className="header__hamburger" src={menu} ></img>
                
            </nav>
        
            

        
        </div>
    )
    
}

export default Header