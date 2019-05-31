import React from 'react';
import { Link } from 'react-router-dom';

const OpenMenu = (props) => {
  const { showClass, changeClass } = props
  return (
    <div className="open-menu"  id="active-menu"id={showClass? "active-menu": null}>
      <Link onClick={changeClass} id="menu-link" to="/olga-saves-the-world">OLGA SAVES THE WORLD!</Link>
      <Link onClick={changeClass} id="menu-link" to="/illustration">ILLUSTRATION</Link>
      <Link onClick={changeClass} id="menu-link" to="/signs">SIGNS</Link>
      <Link onClick={changeClass} id="menu-link" to="/design">DESIGN</Link>
      <Link onClick={changeClass} id="menu-link" to="/about">ABOUT</Link>
      <Link onClick={changeClass} id="menu-link" to="contact">CONTACT ME</Link>
    </div>
  )
}

export default OpenMenu;
