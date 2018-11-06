import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhonInfoList from './components/PhonInfoList';


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

  handleRemove = (id)=>{
    const { information } = this.state;
    this.setState({
      information:information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) =>{
    const {information} = this.state;
    this.setState({
      information:information.map(
        info => {
          if(info.id === id){
            return{
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }

  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        <PhonInfoList 
        data={this.state.information}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
