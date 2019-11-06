import React, { Component } from 'react'
import styled from 'styled-components'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Text = styled.div`
width: 649px;
height: 319px;
margin: ${props => props.margin}

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: left;
text-indent: 20px;
`

const Texthead = styled.div`
width: 737px;
height: 112px;
margin-top: 20%;
margin-left: -50px;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;

color: #000000;
`

export default class Eat1 extends Component {
    render() {
        return (
            <div>
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true}><Texthead>สิ่งที่แพนด้าแดงกิน ?</Texthead></ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}><Text margin="-25px 0px -50px -50px">ต้นไผ่เป็นอาหารหลักของอาหารแพนด้าแดง เช่นเดียวกับแพนด้า แต่แพนด้าแดงนั้นไม่สามารถย่อยเซลลูโลสในไม้ไผ่ได้ดังนั้น แพนด้าแดงจึงต้องกินหน่อไม้จำนวนมากถึง 4.8 กิโล และ ใบไม้ 1.5 กิโล ต่อวันเพื่อความอยู่รอด </Text></ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}><Text margin="-125px 0px 0px -50px">เเพนด้าเเดงยังกินใบไม้เบอร์รี่เห็ดดอกไม้และบางครั้งก็ยังกินปลา และแมลงอีกด้วย</Text></ScrollAnimation>
            </div>
        )
    }
}
