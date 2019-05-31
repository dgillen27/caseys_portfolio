 import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
      <div className="logo-container">
        <Link className="casey" to="/">Casey Hagan</Link>
        <h2>Illustrator / Designer</h2>
      </div>
      <div className="nav-links">
        <Link to="/olga-saves-the-world">OLGA SAVES THE WORLD!</Link>
        <Link to="/illustration">ILLUSTRATION</Link>
        <Link to="/signs">SIGNS</Link>
        <Link to="/design">DESIGN</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="contact">CONTACT</Link>
      </div>
      <div className="menu-button">
        Menu
      </div>
    </nav>
  )
}

export default Nav;
