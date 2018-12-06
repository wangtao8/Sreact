import React, { Component } from 'react'

export default class List extends Component {
    static defaultProps = { 
        users: [{id:1,name: '暂时没有数据'}]
    }
  render() {
      let {users} = this.props
      users = users.length == 0 ? [{id:1,name: '暂时没有数据'}] : users
      let lis = users.map(res => {
          return <li key={res.id}>{res.name}</li>
      })
    return (
      <ul>
          {lis}
      </ul>
    )
  }
}
