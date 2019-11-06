import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 278px;
height: 112px;
margin-left: 35%;
margin-top: 100px;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 95px;

color: #000000;
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
background: #000000;
border: 3px solid #000000;
transform: rotate(-0.14deg)
`

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Texthead>ติดต่อเรา</Texthead>
                <Line />
          
                <Img src="images\kmuttJPG.jpg" width="200px" height="207px" margin="70px 0px 0px 100px" border="10px solid #FFFFFF" />
              
                <Img src="images\sit.png" width="268px" height="86px" margin="70px 0px 0px 65px" />
                <Img src="images\logosmall.jpg" width="143px" height="172px" margin="70px 0px 0px 100px" border="10px solid #FFFFFF" />
            </div>
        )
    }
}
