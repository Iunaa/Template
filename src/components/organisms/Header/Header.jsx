<<<<<<< HEAD
import logo from "../../../assets/img/logo.png";
import "./header.scss";
function Header() {
  return (
    <div className="container">
      <div className="header">
        <picture className="header__picture">
          <img className="header__logo" src={logo}></img>
        </picture>
      </div>
      <div>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Header;
=======
import Logo from "../../atoms/Logo/Logo"
import Hamburger from "../../molecules/Hamburger/Hamburger"
import Navbar from "../../molecules/Navbar/Navbar"

import "./header.scss"

export default function Header({ logoimg }){
    return (
        <header className="header">
            <nav className="navbar container">
                <Logo img={logoimg} />
                <Hamburger />
                <Navbar />
            </nav>
        </header>
    ) 
}
>>>>>>> 7692a68f32d79ab417b41d0e1562aa74c4359730
