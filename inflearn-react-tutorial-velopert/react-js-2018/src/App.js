import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhonInfoList from './components/PhonInfoList';


class App extends Component {
  id = 3;
  state = {
    information:[
      {
        id:0,
        name:'홍길동',
        phone:'010-3393-5831'
      },
      {
        id:1,
        name:'김민준',
        phone:'010-3393-5831'
      },
      {
        id:2,
        name:'윤세현',
        phone:'010-3393-5831'
      }
    ],
    keyword:'',
  }
  
  handleChange = (e)=>{
    this.setState({
      keyword: e.target.value,
    })
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
        <input value={this.state.keyword} onChange={this.handleChange} placeholder='검색'/>
        <PhonInfoList 
        data={this.state.information.filter(
          info => info.name.indexOf(this.state.keyword) > -1
        )}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
