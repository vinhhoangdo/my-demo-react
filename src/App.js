import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Wellcome from "./components/Welcome";
import Clock from "./components/Clock";
import ButtonExp from "./components/ButtonExp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <heade className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Wellcome name=" this is my first project!" />
          <Clock />
          <ButtonExp />
        </header>
      </div>
    );
  }
}

export default App;
