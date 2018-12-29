import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        
        return (
            <div style={{height:'100%'}}>
                <div className='topBox'>
                    <div className='cenBox'>
                        <ul className='liSty'>
                            <li>
                                <img src="https://chejiqiche.com/video/notice/99.png" className='imgSty'/>
                            </li>
                            <li>
                                <div>Own Car</div>
                            </li>
                            <li>
                                <div>发交通事故奖励120红包</div>
                            </li>
                            <li>
                                <div className='imgBox'>
                                    <img src='https://chejiqiche.com/video/notice/timg4.gif' className='imgGif'/>
                                </div>
                            </li>
                            <li>
                                <div className='nowPhone'>立即摄像</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='botBox'>
                    <div className='listItem'>
                        <img src='https://chejiqiche.com/video/notice/a1.png'/>
                        <span>爱车赔</span>
                    </div>
                    <div className='listItem'>
                        <img src='https://chejiqiche.com/video/notice/a2.png'/>
                        <span>合伙人</span>
                    </div>
                    <div className='listItem'>
                        <img src='https://chejiqiche.com/video/notice/a3.png'/>
                        <span>吃回扣</span>
                    </div>
                    <div className='listItem'>
                        <img src='https://chejiqiche.com/video/notice/a4.png'/>
                        <span>闪救援</span>
                    </div>
                    <div className='listItem'>
                        <img src='https://chejiqiche.com/video/notice/byn.png'/>
                        <span>汽车保养</span>
                    </div>
                    <div className='listItem'>
                        <img src='https://chejiqiche.com/video/notice/baoyang.png'/>
                        <span>汽车维修</span>
                    </div>
                    <div className='listItem'>
                        <img src='https://chejiqiche.com/video/notice/a7.png'/>
                        <span>158全车抛光</span>
                    </div>
                    <div className='listItem'>
                        <img src='https://chejiqiche.com/video/notice/a8.png'/>
                        <span>188全车贴膜</span>
                    </div>
                </div>
            </div>
        )
    }
}

import '../../../styles/AicheshiIndex.css'