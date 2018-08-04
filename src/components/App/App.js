import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../presentational/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Photo from "../pages/Photo";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/photo/:id" component={Photo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
