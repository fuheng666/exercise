import React, { Component } from 'react'
import TodoList from "./cmoponents/todolist";
import TodoConent from "./cmoponents/todolist/todoConent";
import TodoInfo from "./cmoponents/todolist/TodoInfo";
import Calculator from "./cmoponents/Calculator";


export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <TodoConent />
        <TodoInfo />
        <Calculator />
      </div>
    );
  }
}

