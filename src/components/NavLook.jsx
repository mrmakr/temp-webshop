import React from 'react'
import { slide as Menu } from "react-burger-menu";

const NavLook = () => {
  return (
    <Menu itemListElement="div" isOpen={false}>
      <a id="home" className="menu-item123" href="/">
        Home
      </a>
      <a id="about" className="menu-item123" href="/about">
        About
      </a>
      <a id="contact" className="menu-item123" href="/contact">
        Contact
      </a>
    </Menu>
  );
}

export default NavLook