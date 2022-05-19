import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ExersiceList from "./pages/ExersiceList";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Route path="/exersice">
          <ExersiceList />
        </Route>
        <Route path='*'> 
    <Redirect to='/'/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
