import React, { Component } from 'react'
import styled from 'styled-components'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Icon = styled.img`
margin: ${props => props.margin}
padding: 10px 10px 10px 10px;
background: ${props => props.background}
`


const Texthead = styled.div`
width: 737px;
height: 112px;
padding-bottom: 200px;
padding-top: 150px;
margin-top: -75px;
margin-left: 15%;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;
text-align: center;

color: #000000;
`

const Text = styled.div`
width: 499px;
height: 62px;
margin: ${props => props.margin}

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 69px;

color: #000000;
`
export default class Pet3 extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>           <Texthead>เหตุผลที่ไม่ควรเลี้ยงแพนด้าแดง</Texthead></ScrollAnimation>
                        </div>
                    </div>
    <div class="row">
    <div class="col-md"> <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> <Icon src="images\bamboo.png" margin="0px 0px 50px 0px" alt="icon1" background="#009B68"/></ScrollAnimation></div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}><Text margin="10px 0px 0px -300px">กินต้นไผ่เป็นจำนวนมาก</Text></ScrollAnimation>
    <div class="col-md"> <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> <Icon src="images\home.png" margin="0px 0px 50px 0px" alt="icon2" background="#C69C6D" /></ScrollAnimation></div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}><Text margin="10px -200px 0px -300px">ต้องการที่อยู่ขนาดใหญ่</Text></ScrollAnimation>
    
    <div class="w-100"></div>
    <div class="col-md"> <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> <Icon src="images\plus.png" margin="0px 0px 50px 0px" alt="icon3" background="#FF5752" /></ScrollAnimation></div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}><Text margin="10px 0px 0px -300px">การรักษา</Text></ScrollAnimation>
    <div class="col-md"> <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> <Icon src="images\smell.png" margin="0px 0px 50px 0px" alt="icon4" background="#6FC66D" /></ScrollAnimation></div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}><Text margin="10px -200px 0px -300px">กลิ่นแรง</Text></ScrollAnimation>
    <div class="w-100"></div>
    <div class="col-md"> <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> <Icon src="images\moon.png" margin="0px 0px 50px 0px" alt="icon5" background="#346491" /></ScrollAnimation></div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}><Text margin="10px 0px 0px -300px">ออกหากินเวลากลางคืน</Text></ScrollAnimation>
    <div class="col-md"> <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> <Icon src="images\flash.png" margin="0px 0px 50px 0px" alt="icon6" background="#FB7E49" /></ScrollAnimation></div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}><Text margin="10px -200px 0px -300px">รุกราน</Text></ScrollAnimation>
    <div class="w-100"></div>
    <div class="col-md"> <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> <Icon src="images\scales.png" margin="0px 0px 50px 0px" alt="icon7" background="#FFC93F" /></ScrollAnimation></div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}><Text margin="10px 0px 0px -300px">ผิดกฎหมาย</Text></ScrollAnimation>
    <div class="col-md"> <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> <Icon src="images\search.png" margin="0px 0px 50px 0px" alt="icon8" background="#FB70C0" /></ScrollAnimation></div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}><Text margin="10px -200px 0px -300px">สัตว์ใกล้สูญพันธุ์</Text></ScrollAnimation>
  </div>
</div>
                {/* <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food1"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food2"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food3"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food4"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food5"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food6"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food7"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food8"/> */}
            </div>
        )
    }
}
