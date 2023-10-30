import { Link } from 'react-router-dom';

import "./navitem.scss"

export default function NavItem({ router, text }) {
  return (
    <>
      <li className="nav__item"><Link to={router} className="nav__link">{text}</Link></li>
    </>
  )
}