import "./hamburger.scss"

export default function Hamburger() {
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