import React,{useContext} from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/SignUp";
import WorkoutListpage from "./pages/WorkoutList";
import AuthContext from "./store/Auth-context";


function App() {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        {isLoggedIn &&<Route path="/workout">
         <WorkoutListpage/>
        </Route>}
        <Route path='*'> 
    <Redirect to='/'/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
