import React, { Component } from 'react'
import styled from 'styled-components'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Texthead = styled.div`
width: 458px;
height: 112px;
padding-bottom: 100px;
margin-top: -5%;
margin-left: 0%;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;


color: #000000;
`
const Text = styled.p`
width 649px;
height 189px;
margin ${props => props.margin};
padding-bottom 200px;

font-family Kanit;
font-style normal;
font-weight normal;
font-size 24px;
line-height 37px;
text-indent 20px;

color ${props => props.color}
`

const Rectangle = styled.div`
width: 675px;
height: 142px;
margin-top: -35%;
margin-left: -2%;
margin-bottom: 40%;
background: #333333;

`

export default class Behavior1 extends Component {
    render() {
        return (
            <div>
               <ScrollAnimation animateIn="fadeInRight" animateOnce={true}><Texthead>พฤติกรรม</Texthead></ScrollAnimation> 
               <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}><Text margin="0px 0px 100px 0px" color="#000000">  แพนด้าแดงเป็นเป็นสัตว์สันโดษยกเว้นในช่วงฤดูผสมพันธุ์ ออกหากินช่วงเวลาพระอาทิตย์ตกดินจนถึงกลางคืน และใช้เวลาไปกับ การนอนหลับบนต้นไม้ ใช้เวลากลางคืนทำเครื่องหมายอาณาเขตด้วย การปัสสาวะและสร้างมัสค์สำหรับแหล่งหาอาหาร พวกมันทำความ สะอาดตัวเองเหมือนแมวและสื่อสารโดยใช้เสียงหวือหวา </Text></ScrollAnimation> 
               <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}><Text margin="0px 0px 0px 0px" color="#ffffff">หมีแพนด้าสีแดงยืนอยู่บนขาหลังและขยายกรงเล็บอาจดูน่ารัก แต่จริง ๆ แล้วมันเป็นพฤติกรรมการขู่ </Text>           
               <Rectangle /></ScrollAnimation> 

            </div>
        )
    }
}
