import React, { Component } from 'react'
import styled from 'styled-components'

const Img = styled.img`
height: ${props => props.height}
width: ${props => props.width}
margin: ${props => props.margin}
possition: absolute;
`
const Texthead = styled.div`
width: 800px;
height: 112px;
margin-left: 170%;
margin-right: 300px;
margin-top: 50%;

font-family: Staatliches;
font-style: normal;
font-weight: normal;
font-size: 170px;
line-height: 180px;
text-align: center;
color: #000000;

`
const Text = styled.div`
width: 652px;
height: 64px;
margin-left: 190%;
padding 50px;


font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 60px;

text-align: center;


color: #000000;

`
const Clound = styled.img`
possition: absolute;
margin: ${props => props.margin}
width: ${props => props.width}
height: ${props => props.height}
`
export default class Desktop extends Component {
    render() {
        return (
            <div>
                
                <Clound src="images/clound.png" width="550px" height="550px" margin="0px 0px -350px 250px" />
                <Clound src="images/clound.png" width="500px" height="500px" margin="0px 0px -310px -350px" />
                <Texthead>RED PANDA</Texthead>
                <Text>cutest existence in the world.</Text>
                <Img src="images/logo.png" height="900px" width="940px" margin="-280px 0px 0px -300px"/>
                <Img src="images/island.jpg" height="300px" width="310px" margin="-280px 0px 0px 620px"/>
                
            </div>
        )
    }
}
