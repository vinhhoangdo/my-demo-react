import React, { Component } from "react";

class ButtonExp extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: true };

    // To make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggle: !prevState.isToggle,
    }));
    alert(
      !this.state.isToggle
        ? "Turn to the Light theme"
        : "Turn to the Dark theme"
    );
  }

  render() {
    return (
      <button
        style={{
          height: 48,
          width: 100,
          borderRadius: 10,
          border: "none",
          fontSize: 18,
          color: this.state.isToggle ? "black" : "white",
          fontWeight: 700,
          background: this.state.isToggle ? "white" : "black",
          cursor: "pointer",
        }}
        onClick={this.handleClick}
      >
        {this.state.isToggle ? "Light" : "Dark"}
      </button>
    );
  }
}

export default ButtonExp;
