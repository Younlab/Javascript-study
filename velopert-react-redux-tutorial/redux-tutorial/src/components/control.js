import React, { Component } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    );
  }
}

export default Control;
