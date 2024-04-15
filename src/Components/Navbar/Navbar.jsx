// import React from 'react';
// import { div } from 'React-router-dom'; // Import div for navigation
import classes from './Navbar.module.css'; // Import the css file for the navbar

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes["nav-links"]}>
      {/* <span to="/" className={classes.logo}>ReactAI</span>  div to the home page */}
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
      {/* <span className = {classes["auth-link"]}>
        <button to="/login" className="login">Login</button>
        <button to="/signup" className="signup">Sign-Up</button>
      </span> */}
    </nav>
  );
}

export default Navbar;
