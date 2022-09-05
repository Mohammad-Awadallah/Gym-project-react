import React,{useContext} from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/Auth-context";

const NavBar = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  const logoutHandler = () => {
    authCtx.logout()
    history.replace('./')
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Gym Progress WebPage</h1>
      <nav>
        <ul>
         
          {isLoggedIn &&<li>
            <Link to="/workout">Exersice</Link>
          </li>}
          {isLoggedIn &&<li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
