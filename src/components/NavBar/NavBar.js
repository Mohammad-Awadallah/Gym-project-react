import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const logoutHandler = () => {};

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Gym Progress WebPage</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/exersice">Exersice</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
