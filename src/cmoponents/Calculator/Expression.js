import React, { Component } from 'react'
import store from '../../store'
import { changeNumber, compute } from "../../store/calculator/actionCreators";
 
export default class Expression extends Component {
  constructor() {
    super();
    this.state = {
      calculator: store.getState().calculator,
    };
  }

  setSta() {
    this.setState({
      calculator: store.getState().calculator,
    });
  }
  componentDidMount() {
    this.setSta();
    store.subscribe(() => {
      this.setSta();
    });
  }

  handleChange = (e) => {
    changeNumber(e.target.id, e.target.value);
  };
  handleCompute=()=>{
    compute()
  }

  render() {
    let { nextNumber, operator, prevNumber } = this.state.calculator;
    return (
      <div>
        <input
          id="prevNumber"
          type="number"
          value={prevNumber}
          onChange={this.handleChange}
        />
        <button onClick={this.handleCompute}>{operator}</button>
        <input
          id="nextNumber"
          type="number"
          value={nextNumber}
          onChange={this.handleChange}
        />
        =
      </div>
    );
  }
}

