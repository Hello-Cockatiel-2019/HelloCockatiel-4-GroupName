import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 550px;
height: 94px;
padding-bottom: 100px;
margin: -50px 0px 100px -150px;

font-family: Spectral;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 37px;
text-indent: 20px;

color: #000000;
`
const Text = styled.div`
width: 649px;
height: 134px;
margin: 150px 0px 100px -150px;

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
                <Text>Pandas are nocturnal in captivity, so they don't interact much with people. Even hand-raised red pandas have been known to get aggressive toward their keepers.</Text>
                <Texthead>Today, obtaining a pet red panda is inadvisable and often illegal</Texthead>
            </div>
        )
    }
}
