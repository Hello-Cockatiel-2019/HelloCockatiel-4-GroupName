import React, { Component } from 'react'
import styled from 'styled-components'

const Icon = styled.img`
width: 75px;
height: 81px;
margin: ${props => props.margin}
padding: 10px 10px 10px 10px;
background: ${props => props.background}
`

const Text = styled.div`
width: 501px;
height: 62px;
margin: ${props => props.margin}

font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 52px;
display: flex;
align-items: center;

color: #000000;
`
export default class Eat2 extends Component {
    render() {
        return (
            <div>
                <Icon src="images\bamboo.png" margin="0px 0px 50px 0px" alt="food1" background="#009B68" />
                <Text margin="-120px 0px 0px 100px">กินไผ่วันละ 6 กิโล</Text>
                <Icon src="images\time.png" margin="-100px 0px 0px 600px" alt="food1" background="#35B8D5" />
                <Text margin="-90px 0px 0px 700px">ใช้เวลาส่วนใหญ่กินอาหาร</Text>
            </div>
        )
    }
}
