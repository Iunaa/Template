import Logo from "../../atoms/LogoImg/LogoImg";
import Hamburger from "../../molecules/HamburgerMenu/HamburgerMenu";
import NavBar from "../../molecules/NavBar/NavBar";

import "./headerNav.scss";

export default function HeaderNav({ logoImg }){
    return (
        <header className="header">
            <nav className="navbar container">
                <Logo img={logoImg} />
                <Hamburger />
                <NavBar />
            </nav>
        </header>
    ) 
}
