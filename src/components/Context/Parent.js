import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Parent extends Component {
    //接收数据
  static contextTypes = {
    name: PropTypes.string
  }
  render() {
    //   debugger
    return (
      <div>
        {this.context.name}
      </div>
    )
  }
}

export default Parent
