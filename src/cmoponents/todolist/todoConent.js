import React, { Component } from 'react'
import store from "../store/";
import actionCreatos from '../store/actionCreators'

const LiItem = props =>{

  const handelChange = ()=>{
    actionCreatos.changeNewTodo(props.item.id)
  }

  const OnRemove = () =>{
      actionCreatos.removeTodo(props.item.id)
  }
  return (
    <li
      style={{
        textDecoration: props.item.isFinished ? "line-through" : "",
        color: props.item.isFinished ? "#ccc" : "",
      }}
    >
      <input
        type="checkbox"
        checked={props.item.isFinished}
        onChange={handelChange}
      />
      {props.item.title}
      <button onClick={OnRemove}>删除</button>
    </li>
  );
}

export default class todoConent extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  getState() {
    this.setState({
      list: store.getState().list,
    });
  }

  componentDidMount() {
    this.getState();
    store.subscribe(() => {
      this.getState();
    });
  }

  rendItem = () => {
    return this.state.list.map((item) => {
      return <LiItem key={item.id} item={item} />;
    });
  };

  render() {
    return <div>{this.rendItem()}</div>;
  }
}
