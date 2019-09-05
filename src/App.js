import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./main";
import NavBar from "./components/navbar";
import "./App.css";
import ColumnChart from "./columnChart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="container jumbotron">
          <Switch>
            <Route path="/main" component={Main}></Route>
            <Route path="/report" component={ColumnChart}></Route>
            <Redirect from="/" to="/main" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
