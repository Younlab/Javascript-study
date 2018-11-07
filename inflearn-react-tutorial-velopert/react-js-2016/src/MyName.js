import React, { Component } from 'react';

class MyName extends Component {

    static defaultProps={
        name:'기본이름'
    }
    render() {
        return (
            <div>
                안녕하세요 {this.props.name}
            </div>
        );
    }
}

export default MyName;