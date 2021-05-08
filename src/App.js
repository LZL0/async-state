import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    meaningOfLife: 42,
  };

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return {
          meaningOfLife: prevState.meaningOfLife + this.props.increment,
        };
      },
      () => console.log(this.state.meaningOfLife)
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.meaningOfLife}</p>
          <button onClick={this.handleClick} className="App-link">
            Update State
          </button>
        </header>
      </div>
    );
  }
}

export default App;
