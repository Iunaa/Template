import "./hamburgerMenu.scss"

export default function HamburgerMenu() {
  const hamburgerToggle = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  return (
    <div className="hamburger" onClick={hamburgerToggle}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  )
}