import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'

const NavBar = () => (
  <ul className="nav-bar">
    <li>
      <Link style={{textDecoration:'none'}} to="/">Home</Link>
    </li>
    <li>
      <Link style={{textDecoration:'none'}} to="/liked-cocktails">Liked Cocktails</Link>
    </li>
  </ul>
);

export default NavBar;
