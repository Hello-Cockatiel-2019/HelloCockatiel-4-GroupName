import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 800px;
height: 112px;
padding-bottom: 100px;
margin-top: 10%;
margin-left: 5%;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;

color: #000000;
`
const Text = styled.p`
width: 649px;
height: 152px;
margin: ${props => props.margin}

font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-indent: 20px;

color: #000000;
`
export default class Pet extends Component {
    render() {
        return (
            <div>
                <Texthead>สามารถนำแพนด้าแดงมาเป็นสัตว์เลี้ยง</Texthead>
                <Text margin="0px 0px 0px 50px">ถึงแม้ว่าหมีแพนด้าสีแดงน่ารักและดูน่ากอดและสายพันธุ์ที่ดีในการ ถูกจองจำมีหลายเหตุผลที่ไม่ใช่สัตว์เลี้ยงทั่วไป</Text>
           
            </div>
        )
    }
}
