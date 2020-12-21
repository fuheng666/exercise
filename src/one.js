import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class one extends 
Component {

  
 static defaultProps = {
    username:'aaa'
 } 

 static propTypes = {
    username: PropTypes.oneOfType([
      PropTypes.string,PropTypes.number
    ]),
    // arr:PropTypes.array,
    // arr:PropTypes.arrayOf(PropTypes.object)
    arr:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      sex:PropTypes.string
    })).isRequired

 }

  render() {
    return (
      <div>
        one === {this.props.username}
      </div>
    )
  }
}
