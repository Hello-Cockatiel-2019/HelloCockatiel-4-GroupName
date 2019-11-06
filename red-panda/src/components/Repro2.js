import React, { Component } from 'react'
import styled from 'styled-components'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Text = styled.div`
width: 649px;
height: 134px;
margin: -200px 0px 0px -50px;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: right;
text-indent: 20px;

color: #000000;
`
export default class Pet extends Component {
    render() {
        return (
            <div>
               <ScrollAnimation animateIn="fadeInLeft" delay={1000} animateOnce={true}><Text>ลูกจะเริ่มเปิดตาเมื่ออายุประมาณ 18 วันและหย่านมประมาณ 6 ถึง 8เดือน เด็กๆยังอยู่กับแม่จนกว่าจะคลอดลูกตัวต่อไป เพศชายจะช่วยเลี้ยงดูเด็กๆ อายุขัยแพนด้าแดงระหว่าง 8 ถึง 10 ปี </Text></ScrollAnimation> 
                
            </div>
        )
    }
}
