import Logo from "../../atoms/Logo/Logo";
import Hamburger from "../../molecules/Hamburger/Hamburger";
import Navbar from "../../molecules/Navbar/Navbar";

import "./header.scss";

export default function Header({ logoimg }) {
  return (
    <header className="header">
      <nav className="navbar container">
        <Logo img={logoimg} />
        <Hamburger />
        <Navbar />
      </nav>
    </header>
  );
}
