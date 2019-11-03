import React, { Component } from 'react'
import styled from 'styled-components'

const Textbox = styled.div`
width: 393px;
height: 125px;
margin-left: auto;
margin-right: auto;

font-family: Staatliches;
font-style: normal;
font-weight: normal;
font-size: 90px;
line-height: 120px;
text-align: center;

color: #ffffff;

background-color: #F78A68;
border: 5px solid #000000;
box-sizing: border-box;

`
const Textboxblack = styled.div`
font-family: Staatliches;
font-size: 90px;
position: absolute;
bottom: 76px;
left: 144px;
color: #2E2E2E;

width: 383px;
height: 115px;


`
const Borderwhite = styled.div`
position: absolute;
bottom: 69px;
left: 124px;
color: #2E2E2E;

width: 383px;
height: 115px;
border: 3px solid #ffffff;
box-sizing: border-box;

`

const Text = styled.div`
width: 602px;
height: 64px;
margin-left: auto;
margin-right: auto;
padding 16px;


font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 48px;

text-align: center;

color: #000000;

`
const Img = styled.img`

width: 398px;
height: 398px;
margin-left: 100px;
margin-top: 93px;


`


export default class LogoRedpanda extends Component {
  render() {
    return (

     <div>

        <Img src="/images/logo.jpg" alt="Logo" />
        <Textbox>RED PANDA</Textbox>
        <Textboxblack>RED PANDA</Textboxblack>
        <Borderwhite />
        <Text>cutest existence in the world.</Text>
      </div>











    )
  }
}
