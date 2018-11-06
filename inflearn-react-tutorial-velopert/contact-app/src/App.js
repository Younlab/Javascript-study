import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App extends Component {
  id = 0;
  state = {
    information:[],
  }

  handleCreate = (data) => {
    const { information } = this.state;
    // # 1
    // this.setState({
    //   information: information.concat(
    //     Object.assign({},data,{
    //       id:this.id++
    //     })
    //   )
    // })

    // # 2
    // this.setState({
    //   information: information.concat({...data, id:this.id++})
    // })

    //# 3
    this.setState({
      information: information.concat({
        name:data.name,
        phone:data.phone,
        id:this.id++
      })
    })
  }
  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
