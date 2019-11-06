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
const Text = styled.div`
width: 901px;
height: 108px;
margin-top: 15%;
margin-left: 10%;

font-family: Kanit;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 54px;
text-align: center;

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
                <Img src="images\facebook.jpg" width="102px" height="102px" margin="70px 0px 0px 0px" border="10px solid #FFFFFF" />
                <Img src="images\twitter.jpg" width="102px" height="102px" margin="70px 0px 0px 50px" border="10px solid #FFFFFF" />
                <Img src="images\kmuttJPG.jpg" width="200px" height="207px" margin="30px 0px 0px 50px" border="10px solid #FFFFFF" />
              
                <Img src="images\sit.jpg" width="268px" height="86px" margin="70px 0px 0px 50px" />
                <Img src="images\logosmall.jpg" width="143px" height="172px" margin="10px 0px 0px 50px" border="10px solid #FFFFFF" />
                <Text>126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140 โทรศัพท์ 0-2470-8000 โทรสาร 0-2427-8412</Text>
            </div>
        )
    }
}
