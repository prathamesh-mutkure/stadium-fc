import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/player/:index" exact component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
