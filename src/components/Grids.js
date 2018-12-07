import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import '../styles/Grids.css'

// const data = Array.from(new Array(9)).map((_val, i) => ({
//   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//   text: `name${i}`
// }))

const data1 = Array.from(new Array(9)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'
}))

export default class Grids extends Component {
  render() {
    return (
      <Grid data={data1}
        columnNum={3}
        renderItem={dataItem => (
          <div style={{ padding: '12.5px' }}>
            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
              <span>I am title..</span>
            </div>
          </div>
        )}
      />
    )
  }
}
