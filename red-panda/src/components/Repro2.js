import React, { Component } from 'react'
import styled from 'styled-components'

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
                <Text>The cubs open their eyes around 18 days of age and are weaned around six to eight months of age. They remain with their mother until the next litter is born. Males only help raise young if the pandas live in very small groups. On average, a red panda lives between eight and 10 years.</Text>
                
            </div>
        )
    }
}
