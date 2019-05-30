import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
      <Link to="/">Casey Hagan</Link>
      <h2>Illustrator/Designer</h2>
      <Link to="/olga-saves-the-world">OLGA SAVES THE WORLD!</Link>
      <Link to="/illustration">ILLUSTRATION</Link>
      <Link to="/signs">SIGNS</Link>
      <Link to="/design">DESIGN</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="contact">CONTACT</Link>
    </nav>
  )
}

export default Nav;
