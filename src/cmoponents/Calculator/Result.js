import React, { Component } from 'react'
import store from '../../store'
console.log(store);
export default class Result extends Component {
  state = {
    result:0
  };
setData(){
 this.setState({
   result: store.getState().calculator.result,
 });
}

  componentDidMount(){
    this.setData()
    store.subscribe(()=>{
      this.setData();
    })
  }

  render() {
    return <div>{this.state.result}</div>;
  }
}
