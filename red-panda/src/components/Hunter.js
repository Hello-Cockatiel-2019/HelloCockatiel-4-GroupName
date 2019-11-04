import React, { Component } from 'react'
import styled from 'styled-components'

const Icon = styled.img`
margin: ${props => props.margin}
border: 3px solid #000000;
padding: 10px 10px 10px 10px;
`

const Border = styled.div`
border: 5px solid #000000;
box-sizing: border-box;
`
const Img = styled.img`
height: ${props => props.height}
width: ${props => props.width}
margin: ${props => props.margin}
border: ${props => props.border}
`

const Texthead = styled.div`
width: ${props => props.width}
height: ${props => props.height}
padding-bottom: 200px;
margin: ${props => props.margin}


font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;
text-align: center;

color: #000000;
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

color: #000000;
`

export default class Hunter extends Component {
    render() {
        return (
            <div>
                <Texthead height="112px" width="850px" margin="0px 0px 0px 100px"><b>Things That Are A Threats To Red Pandas</b></Texthead>
                <Img src="images\snowleopard.png" alt="snowleopard" height="245px" width="245px" margin="0px 150px 0px 0px"/>
                <Img src="images\mustelid.png" alt="mustelid" height="245px" width="245px" margin="0px 150px 0px 0px"/>
                <Img src="images\human.png" alt="human" height="245px" width="245px" margin="0px 0px 0px 0px"/>
                <Texthead height="112px" width="500px"margin="50px 0px 0px -130px">Snow Leopards</Texthead>
                <Texthead height="112px" width="500px"margin="-200px 0px 0px 275px">Mustelids</Texthead>
                <Texthead height="112px" width="500px"margin="-200px 0px 0px 660px">Humans</Texthead>
                <Img src="images\redpanda7.jpg" alt="redpanda7" height="400px" width="254px" margin="0px 200px 0px 200px"/>
                <img src="images\redpandastand.jpg" alt="redpandastand" height="398px" width="300px" margin="0px 0px 0px 0px"/>
                <Text margin="75px 0px 0px 250px">a red panda will try to escape by running up a rock or tree. If cornered, it will stand on its hind legs and extend its claws to appear larger and threatening.</Text>
                <Texthead height="112px" width="877px"margin="-100px 0px 50px 150px"><b>Reason Why Red Pandas Are Endanred Species</b></Texthead>
                <Text margin="-75px 0px 50px 250px">The red panda faces multiple threats, including deforestation of bamboo, increased death from canine distemper due to human encroachment, habitat loss, and poaching for the pet and fur trades </Text>
                
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food1"/>
                <Texthead height="62px" width="499px"margin="-150px 0px 0px 445px">Deforestation of Bamboo </Texthead>
                
                <Icon src="images\food.jpg" margin="-100px 300px 0px 350px" alt="food2"/>
                <Texthead height="62px" width="499px"margin="-100px 0px 0px 370px">Lost of Habitats </Texthead>
                
                <Icon src="images\food.jpg" margin="-100px 300px 0px 350px" alt="food3"/>
                <Texthead height="62px" width="499px"margin="-100px 0px 0px 310px">Poaching</Texthead>
            </div>
        )
    }
}
