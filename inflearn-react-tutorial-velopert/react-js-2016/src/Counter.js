import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number:0,
    }

    handleIncrease = () =>{
        this.setState({
            number:this.state.number +1
        })
    }

    handleDecrease = () =>{
        this.setState({
            number:this.state.number -1
        })
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>
                    <p>값 : {this.state.number}</p>
                    <button onClick={this.handleIncrease}>+</button>
                    <button onClick={this.handleDecrease}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;