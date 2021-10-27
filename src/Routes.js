import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/player/:index" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default Routes;
