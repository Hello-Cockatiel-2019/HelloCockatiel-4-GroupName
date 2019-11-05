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
                <Texthead>Reproduction</Texthead>
                <Text margin="0px 0px 0px 50px">Red pandas become sexually mature at 18 months of age and fully mature at age two or three years. Females gather grass and leaves to build a nest a few days before giving birth to one to four deaf and blind cubs. Initially, the mother spends all of her time with the cubs, but after a week she starts venturing out to feed. </Text>
           
            </div>
        )
    }
}
