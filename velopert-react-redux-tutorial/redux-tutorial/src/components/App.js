import React, { Component } from "react";
import Counter from "./counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
export default App;
