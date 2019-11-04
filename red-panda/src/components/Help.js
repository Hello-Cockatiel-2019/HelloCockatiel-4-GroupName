import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 737px;
height: 112px;
margin-left: 15%;
margin-top: 102px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;
text-align: center;
text-align: center;

color: #FFFFFF;
`
const Text = styled.div`
width: 649px;
height: 319px;
margin: ${props => props.margin}


font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: center;
text-indent: 20px;

color: #FFFFFF;
`
const Img = styled.img`
height: ${props => props.height}
width: ${props => props.width}
margin: ${props => props.margin}

`
export default class Help extends Component {
    render() {
        return (
            <div>
                <Texthead>Help The Red Pandas</Texthead>
                <Img src="images\redpanadhelp.jpg" width="437px" height="328px" margin="34px 0px 0px 315px" />
                <Text margin="45px 0px 0px 180px">The IUCN has classified the red panda as endangered since 2008. Worldwide population estimates range from 2500 to 20,000 individuals. The species' population has declined about 50 percent over the last three generations and is expected to continue to fall at an accelerated rate.</Text>
                <Text margin="-130px 0px 0px 180px"><b>Over half of red panda deaths are directly related to human activity.</b></Text>
                <Img src="images\wwf.png" width="191px" height="283px" margin="-150px 0px 0px 400px"/>            
                <Text margin="80px 0px 0px 180px">you can aid conservation efforts in zoos and in the wild by donating to WWF or Red Panda Network.</Text>
                </div>
        )
    }
}
