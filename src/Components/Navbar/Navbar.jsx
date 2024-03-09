// import React from 'react';
// import { div } from 'React-router-dom'; // Import div for navigation
import classes from './Navbar.module.css'; // Import the css file for the navbar
function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div to="/" className="logo">ReactAl</div>  {/* div to the home page */}
      <ul className="nav-divs">
        <li>
          <div to="/about">About</div>
        </li>
        <li to = "/getcode">
            GetCode
        </li>
        <li>
          <div to="/contact">Contact</div>
        </li>
      </ul>
      <span>
        <div to="/login" className="login">Login</div>
        <div to="/signup" className="signup">Sign Up</div>
      </span>
    </nav>
  );
}

export default Navbar;
