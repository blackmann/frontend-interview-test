import React, {Component} from "react";
import Home from "./pages/Home";
import LinkDetail from "./pages/LinkDetail"
import {Switch, Route} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:id" component={LinkDetail}/>
      </Switch>
    );
  }
}

export default App;
