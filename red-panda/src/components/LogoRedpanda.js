import React, { Component } from 'react'
import styled from 'styled-components'

const Textbox = styled.div`
width: 514px;
height: 150px;
margin-left: 50%;
margin-top: 15%;

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
width: 652px;
height: 64px;
margin-left: 40%;
padding 16px;


font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 60px;

text-align: center;


color: #7E7E7E;

`
const Img = styled.img`

width: 488px;
height: 488px;
margin-top: 5%;
margin-left: 50%;
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
        <Text>cutest existence in the world.</Text>
      
        
      </div>










    )
  }
}
