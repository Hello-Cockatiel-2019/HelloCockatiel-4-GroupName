import React, { Component } from 'react'
import styled from 'styled-components'

const Textbox = styled.div`
width: 514px;
height: 150px;
margin-left: 40%;
margin-right: 300px;
margin-top: 15%;

font-family: Staatliches;
font-style: normal;
font-weight: normal;
font-size: 120px;
line-height: 150px;
text-align: center;
color: #2C2C2C;

background-color: #ffffff;
border: 5px solid #B8B8B8;
box-sizing: border-box;

`




const Text = styled.div`
width: 652px;
height: 64px;
margin-left: 32%;
padding 16px;


font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 60px;

text-align: center;


color: #7E7E7E;;

`
const Img = styled.img`

width: 677px;
height: 741px;
margin-top: 5%;
margin-left: 30%;
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
       
<Textbox>RED PANDA</Textbox>
        
        
        <Text>cutest existence in the world.</Text>
        <Img src="/images/logo2.jpg" alt="Logo" />
        <Clound src="images/clound.png" margin="-520px 0px 0px -50px" width="468" height="468" />
        <Clound src="images/clound.png" margin="-390px 0px 0px 620px" width="506" height="506" />
      </div>










    )
  }
}
