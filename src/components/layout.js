import React from "react"
import { Link } from "gatsby"

import logo from "../../content/assets/blitts_logo.png"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `1100px`,
        width: `90%`,
      }}
    >
      <header className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" width="200" />
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
