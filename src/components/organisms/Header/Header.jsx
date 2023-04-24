function Header(){
    return(
        <div className="container">
        
        <div className="header">
            <picture className="header__picture">
                <img className="header__logo" src={logo}></img>
            </picture>

        </div>
        <div>
            <ul>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Pricing</a></li>
                <li><a>Blog</a></li>
            </ul>

        </div>
        <div>
            <button>Contact</button>

        </div>
        </div>
    )
    
}

export default Header