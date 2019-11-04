import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 278px;
height: 112px;
margin-left: 35%;
margin-top: 100px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 95px;

color: #FFFFFF;
`
const Img = styled.img`
height: ${props => props.height}
width: ${props => props.width}
margin: ${props => props.margin}
border: ${props => props.border}
`
const Line = styled.div`
width: 1300px;
height: 0px;
margin-left: -100px;

border: 3px solid #FFFFFF;
transform: rotate(-0.14deg)
`

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Texthead>Contact Us</Texthead>
                <Line />
               
                <Img src="images\kmuttJPG.jpg" width="152px" height="152px" margin="70px 0px 0px 300px" border="10px solid #FFFFFF" />
              
                <Img src="images\sit.png" width="268px" height="86px" margin="70px 0px 0px 50px" />
            </div>
        )
    }
}
