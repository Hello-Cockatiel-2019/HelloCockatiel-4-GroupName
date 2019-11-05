import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 458px;
height: 112px;
padding-bottom: 100px;
margin-top: -5%;
margin-left: 0%;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;

color: #000000;
`
const Text = styled.p`
width: 649px;
height: 189px;
margin: ${props => props.margin}
padding-bottom: 200px;

font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;

color: ${props => props.color}
`

const Rectangle = styled.div`
width: 650px;
height: 122px;
margin-top: -35%;
margin-left: -2%;
margin-bottom: 40%;
background: #333333;

`

export default class Behavior1 extends Component {
    render() {
        return (
            <div>
                <Texthead>พฤติกรรม</Texthead>
                <Text margin="0px 0px 100px 0px" color="#000000">แพนด้าแดงเป็นเป็นสัตว์สันโดษยกเว้นในช่วงฤดูผสมพันธุ์ ออกหากินช่วงเวลาพระอาทิตย์ตกดินจนถึงกลางคืน และใช้เวลาไปกับ การนอนหลับบนต้นไม้ ใช้เวลากลางคืนทำเครื่องหมายอาณาเขตด้วย การปัสสาวะและสร้างมัสค์สำหรับแหล่งหาอาหาร พวกมันทำความ สะอาดตัวเองเหมือนแมวและสื่อสารโดยใช้เสียงหวือหวา </Text>
                <Text margin="0px 0px 0px 0px" color="#ffffff">หมีแพนด้าสีแดงยืนอยู่บนขาหลังและขยายกรงเล็บอาจดูน่ารัก แต่จริง ๆ แล้วมันเป็นพฤติกรรมการขู่ </Text>                
                <Rectangle />

            </div>
        )
    }
}
