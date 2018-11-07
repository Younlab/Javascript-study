import React, { Component } from 'react';

class Codelab extends Component {
    render() {
      return (
        <div>
          <h2>hello {this.props.name}</h2>
          <div>{this.props.children}</div>
        </div>
      );
    }
  }
  
  export default Codelab;