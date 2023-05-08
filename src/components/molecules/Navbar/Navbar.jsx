import { Link } from 'react-router-dom';
import NavItem from '../../atoms/NavItem/NavItem';

import "./navbar.scss"

const listPages = [
  {
    router: "about",
    text: "About"
  },
  {
    router: "services",
    text: "Services"
  },
  {
    router: "pricing",
    text: "Pricing"
  },
  {
    router: "blog",
    text: "Blog"
  },
]

export default function Navbar() {
	return (
    <div className="nav__menu">
      <ul className="nav__items">
        {listPages.map((cur => (
          <NavItem router={cur.router} text={cur.text} />
        )))}
      </ul>
      
      <Link to="/contact" className="button button--border">Contact</Link>
    </div>
	)
}