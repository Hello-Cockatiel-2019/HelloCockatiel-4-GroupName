import React, { Component } from 'react'
import styled from 'styled-components'

const Head = styled.div`
width: 566px;
height: 112px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 64px;
margin-left: 100px;

color: #000000;
`
const Text = styled.div`
width: 649px;
height: 64px;
font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
text-indent: 20px;
margin-left: 100px;

color: #000000;
`
const Texticon = styled.div`
position: absolute;
width: 200px;
height: 62px;
margin: ${props => props.margin}


font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 69px;

color: #000000;
`
const Icon = styled.img`
margin: ${props => props.margin}

`

    const Border = styled.div`
    border: 5px solid #000000;
    box-sizing: border-box;
    `

export default class About extends Component {
    render() {
        return (
            <div>
                <Head>Where do Red Pandas Live? </Head>
                <Text>Almost 50% of the red panda’s habitat is in the Eastern Himalayas. They use their long, bushy tails for balance and to cover themselves in winter, presumably for warmth. </Text>
                <Icon src="images\thermometer.png" margin="200px 0px 0px 130px" alt="food"/>
                <Texticon margin="-60px 0px 0px 230px">Omnivored</Texticon>
               
            </div>
        )
    }
}
