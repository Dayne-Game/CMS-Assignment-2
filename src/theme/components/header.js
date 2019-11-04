import React from "react"
import { Link } from "gatsby"

import headerStyles from "../theme-styles/header.module.scss"
import Logo from "../theme-images/icon.png"

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <img
        src={Logo}
        alt="Gatsby Netlify Header"
        className={headerStyles.logo}
      />
      <h1 className={headerStyles.title}>Gatsby + Netlify</h1>
      <p className={headerStyles.tagline}>Best Combination in History</p>
      <div className={headerStyles.linkBox}>
        <Link to="/" className={headerStyles.buttonLinks}>
          Home
        </Link>
        <Link to="/about" className={headerStyles.buttonLinks}>
          About
        </Link>
        <Link to="/blog" className={headerStyles.buttonLinks}>
          Blog
        </Link>
        <Link to="/terms" className={headerStyles.buttonLinks}>
          Terms (T & C)
        </Link>
        <Link to="/policy" className={headerStyles.buttonLinks}>
          Policy
        </Link>
        <Link to="/contact" className={headerStyles.buttonLinks}>
          Contact
        </Link>
        <Link to="/gallery" className={headerStyles.buttonLinks}>
          Gallery
        </Link>
      </div>
    </div>
  )
}

export default Header
