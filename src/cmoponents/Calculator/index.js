import React, { Component } from 'react'
import Expression from './Expression'
import Result from './Result'


export default class index extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
        <Expression />
        <Result />
      </div>
    );
  }
}
