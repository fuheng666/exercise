import React, { Component } from 'react'
import store from '../../store'
export default class TodoInfo extends Component {
  state = {
    list: store.getState().todolist.list,
  };

  compute = () => {
    const { list } = this.state;
    let all = { total: 0, finish: 0, unFinish: 0 };
    if (list.length === 0) return all;
    all.total = list.length;
    list.forEach((item) => {
      if (item.isFinished) {
        all.finish++;
      } else {
        all.unFinish++;
      }
    });
    return all;
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        list: store.getState().todolist.list,
      });
    });
  }
  componentWillUnmount() {
    //处理逻辑
  }

  render() {
    let all = this.compute();
    return (
      <div>
        <span>总共有多少条{all.total}</span>&nbsp;
        <span>总共有完成多少条{all.finish}</span>&nbsp;
        <span>总共有未完成多少条{all.unFinish}</span>&nbsp;
      </div>
    );
  }
}
