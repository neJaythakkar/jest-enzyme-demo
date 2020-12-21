import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  constructor(props) {
    super(props);
  }

  render = () => {
    const {counter} = this.state;
    return (
      <div className="App" data-test="component-app">
        <div className="body-wrapper">
          <div className="display wrapper">
            <h1 data-test="component-app-counter-display">Counter : {counter}</h1>
          </div>
          <div className="button-wrapper">
            <button
              className="increment-button"
              data-test="component-app-increment-button"
              onClick={() => {
                this.setState((prevState) => ({ counter: prevState.counter + 1 }));
              }}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
