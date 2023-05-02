import logo from "../../../assets/img/logo.png"
import menu from "../../../assets/img/menu.png"

function Header(){
    function changeMenu(){
       const list = ["About", "Services", "Pricing", "Blog"]
       console.log(list)
    }
    return (
        <div className="header container" >
            <nav  className="header__nav-container" >

                <picture className="header__picture">
                    <img className="header__logo" src={logo} ></img>
                </picture>
                 

              <div className="header__menu-container">
                <div className="header__mobile">
                 <img className="header__hamburger" src={menu} onClick={changeMenu}></img>
                 </div>
              <div className="header__desktop">
                  
                    <ul id="itens">
                        <li><a>About</a></li>
                        <li><a>Services</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Blog</a></li>
                        <li><a className="header__anchor">Contact</a></li>
                    </ul>

                    
                  
                </div>
            
             
                
            </div>
            
                
            </nav>
        
            

        
        </div>
    )
    
}

export default Header