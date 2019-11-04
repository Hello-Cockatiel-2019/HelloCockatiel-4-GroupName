import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 800px;
height: 112px;
padding-bottom: 100px;
margin-top: -75px;
margin-left: 5%;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;

color: #000000;
`
const Text = styled.div`
width: 649px;
height: 152px;
margin: ${props => props.margin}

font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-indent: 20px;

color: #000000;
`
export default class Pet extends Component {
    render() {
        return (
            <div>
                <Texthead>Can You Keep a Red Panda as a Pet?</Texthead>
                <Text margin="0px 0px 0px 50px">Although the red panda is cute and cuddly-looking and breeds well in captivity, there are several reasons it's not a common pet. A red panda needs a massive amount of fresh bamboo each day. It requires a large enclosure, canine distemper vaccination, and flea treatment (infestation can be lethal). Red pandas use anal glands to mark territory, producing a strong smell. </Text>
           
            </div>
        )
    }
}
