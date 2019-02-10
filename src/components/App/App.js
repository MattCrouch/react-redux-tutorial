import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import User from "../container/User";
import HomePage from "../pages/Home";
import PhotoPage from "../pages/Photo";
import UserPage from "../pages/User";
import Header from "../presentational/Header";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <User />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/photo/:id" component={PhotoPage} />
          <Route exact path="/user" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
