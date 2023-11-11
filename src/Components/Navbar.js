import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './style.css'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar_ul">
        <li className="navbar_ul_li">

      <Link className="navbar_ul_li_a" aria-current="page" to="/">Home</Link>
      <div className="space">
      <Link className="navbar_ul_li_a " aria-current="page" to="/about">About</Link>
      <Link className="navbar_ul_li_a" aria-current="page" to="/contact1">Contact Me</Link>
      {/* <Link className="navbar_ul_li_a" aria-current="page" to="/contact">Contact me</Link> */}
      <Link className="navbar_ul_li_a" aria-current="page" to="/Projects">Projects</Link>
      </div>
        </li>
  
      </ul>
    </nav>
  )
}

export default Navbar
