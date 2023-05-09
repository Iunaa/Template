import Logo from "../../atoms/Logo/Logo"
import Hamburger from "../../molecules/Hamburger/Hamburger"
import Navbar from "../../molecules/Navbar/Navbar"

import "./header.scss"

export default function Header({ logoImg }){
    return (
        <header className="header">
            <nav className="navbar container">
                <Logo img={logoImg} />
                <Hamburger />
                <Navbar />
            </nav>
        </header>
    ) 
}
