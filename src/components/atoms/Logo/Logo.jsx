import { Link } from "react-router-dom";
import "./logo.scss"

export default function Logo({ img }) {
  return (
    <>
      <Link title="Go to home page" to="/"><img className="logo" src={img} alt="Agency"></img></Link>
    </>
  )
}