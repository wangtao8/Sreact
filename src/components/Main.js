// import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import Tabe from './Tabe'
import PropTypes from 'prop-types'

export default class Main extends Component {
  //申明全局变量
  static childContextTypes = {
    name: PropTypes.string
  }
  //数据写入 记得return
  getChildContext(){
    return {
      name: 'jkhk'
    }
  }
  render() {
    return (
      <div>
        <Tabe/>
      </div>
    )
  }
}


