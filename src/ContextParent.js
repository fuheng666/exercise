import React, { Component} from 'react'
import ContextChild from "./ContextChild";
import moneyContext from './moneyContext'
let { Provider, Consumer } = moneyContext;

moneyContext.displayName = 'myMoney'
export default class ContextParent extends Component {
  

  state = {
    money:100
  }
  render() {
    return (
      <Provider value={{ money: this.state.money }}>
        <ContextChild  />
      </Provider>
    );
  }
}
