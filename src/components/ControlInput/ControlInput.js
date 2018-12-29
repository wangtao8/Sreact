import React, { Component } from 'react'

export default class ControlInput extends Component {
    constructor(){
        super()
        this.state = {
            username: 'admin',
            password: '123'
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitBtn = this.submitBtn.bind(this);
    }
    handleChange(e, name){
        this.setState({
            [name]: e.target.value
        })
    }
    submitBtn(){
        // console.log(`username： ${this.state.username}, password: ${this.state.password}`)
    }
    render() {
        return (
            <div>
               用户名： <input value={this.state.username} onChange={(e)=>this.handleChange(e, 'username')}/><br/>
               密&emsp;码： <input type='password' value={this.state.password} onChange={(e)=>this.handleChange(e, 'password')}/><br/>
               <button type='button' onClick={this.submitBtn}>登&emsp;录</button>
            </div>
        )
    }
}
