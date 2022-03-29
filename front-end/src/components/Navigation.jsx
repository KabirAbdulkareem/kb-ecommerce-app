import "./Navigation.css"
import React from 'react'
import { Link } from 'react-router-dom'

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faXmark, faOutdent} from '@fortawesome/free-solid-svg-icons' */
import Close from "./Close"

function Navigation() {
  return (

    <>
      <div>
        <ul id="navbar">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li id="lg-bag"><Link to="/cart"><i className="fa-solid fa-bag-shopping" /></Link></li>
          <Close />
        </ul>
      </div>

      <div id="mobile">
          <Link to="/cart"><i className="fa-solid fa-bag-shopping" /></Link>
          <i id="bar" className="fa-solid fa-outdent" />
      </div>
    
    </>



    
  )
}

export default Navigation