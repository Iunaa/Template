import logo from "../../../assets/img/logo.png"
import "./header.scss"
function Header(){
    return(
        
        
        <div className="header">
            <nav  className="header__nav-container" >
                <picture className="header__picture">
                    <img className="header__logo" src={logo}></img>
                </picture>

        
                <div className="header__list">
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Services</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Blog</a></li>
                    </ul>

                </div>

                <button className="header__button">Contact</button>
                
            </nav>
        
            

        
        </div>
    )
    
}

export default Header