import Logo from "../../atoms/LogoImg/LogoImg";
import HamburgerMenu from "../../molecules/HamburgerMenu/HamburgerMenu";
import NavBar from "../../molecules/NavBar/NavBar";

import "./headerNav.scss";

export default function HeaderNav({ logoImg }){
    return (
        <header className="header">
            <nav className="navbar container">
                <Logo img={logoImg} />
                <HamburgerMenu />
                <NavBar />
            </nav>
        </header>
    ) 
}
