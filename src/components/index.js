require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Main from './Main'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('页面加载：', this)
    this.state = { liked: false, text: '呵呵'};
  }
  handleClick(e) {
//	this.state.liked = !this.state.liked
//	this.state.text = this.state.liked ? '呵呵' : '哈哈'
  	this.setState({liked:!this.state.liked, text: this.state.liked ? '呵呵' : '哈哈'})
  	console.log(this.state.text)
  }
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice"  onClick={this.handleClick.bind(this)}>{this.state.text}</div>
        <Main/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;