import { Link } from "react-router-dom"
import  logo from "../img/logo.png"
import Navigation from "../components/Navigation"
function Header() {
  return (
    <section id="header">
        <Link to="#"><img src={logo} className="logo" alt="" /></Link>
        <Navigation />
    </section>
  )
}

export default Header