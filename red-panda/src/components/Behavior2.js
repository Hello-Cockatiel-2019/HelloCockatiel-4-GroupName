import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.p`
width: 357px;
height: 129px;
margin-top: 5%;

font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: center;
text-indent: 20px;

color: #000000;
`

export default class Behavior2 extends Component {
    render() {
        return (
            <div>
                <Text>เมื่ออากาศร้อนมันจะนอนเหยียดขา บนกิ่งไม้และทำให้ขาของมันเย็นลง</Text>
            </div>
        )
    }
}
