import React, { Component } from 'react'
import styled from 'styled-components'


const Textbox = styled.div`
width: 514px;
height: 150px;
margin-left: 40%;
margin-top: 5%;

font-family: Staatliches;
font-style: normal;
font-weight: normal;
font-size: 120px;
line-height: 150px;
text-align: center;
color: #ffffff;

background-color: #FB7E49;

`




const Text = styled.div`
width: 602px;
height: 64px;
margin-left: 35%;
margin-top: 5%;


font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 50px;

text-align: center;


color: #7E7E7E;

`
const Img = styled.img`

width: 488px;
height: 488px;
margin-top: -35%;
margin-left: 43%;
padding-top: 2%;

`
const Clound = styled.img`
margin: ${props => props.margin}
position: absolute;
width: ${props => props.width}
height: ${props => props.height}
`

export default class LogoRedpanda extends Component {
  render() {
    return (

     <div>
         <Img src="/images/logo.png" alt="Logo" />
        <Textbox>RED PANDA</Textbox>
        <Text>สิ่งมีชีวิตที่น่ารักที่สุดในโลก</Text>
      
        
      </div>










    )
  }
}
