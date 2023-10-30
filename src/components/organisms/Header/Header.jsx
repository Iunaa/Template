import Logo from "../../atoms/Logo/Logo"
import Hamburger from "../../molecules/Hamburger/Hamburger"
import Navbar from "../../molecules/Navbar/Navbar"
import Styles from "./header.scss"

export default function Header({ logoimg }){
    return (
        <header className={Styles.header}>
            <nav className={`${Styles.navbar} container`}>
                <Logo img={logoimg} />
                <Hamburger />
                <Navbar />
            </nav>
        </header>
    ) 
}
