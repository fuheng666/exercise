import React, { Component } from 'react'
import actionCreators from '../store/actionCreators'
export default class index extends Component {
  handleUp=e=>{
    if(e.keyCode === 13){
        actionCreators.addNewTodo(e.target.value)
        e.target.value = ''
    }
  }

  render() {
    return <input onKeyUp={this.handleUp} placeholder="请输入内容" />;
  }
}
