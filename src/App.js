import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Calculator from "./components/pages/calculator/Calculator";
import UsersTable from "./components/pages/UsersTable/UsersTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/calculator" component={Calculator} />
          <Route path="/" component={UsersTable} />
        </Switch>
        <Navbar />
        App
      </div>
    );
  }
}

export default App;
