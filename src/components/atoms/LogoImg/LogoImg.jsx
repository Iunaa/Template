import { Link } from "react-router-dom";
import "./logoImg.scss"

export default function LogoImg({ img }) {
  return (
    <>
      <Link title="Go to home page" to="/"><img className="logo" src={img} alt="Agency"></img></Link>
    </>
  )
}