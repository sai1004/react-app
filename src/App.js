import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // need import component from react
  constructor(props) {
    super(props);
  }

  componentWillMount(props, state) {}

  componentDidMount(props, state) {
    console.log("Mounted With:", props, state);
  }
  render() {
    let name = "nick";
    return (
      <div className="App">
        <h4> hello {name}</h4>
      </div>
    );
  }
}

export default App;
