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

const Texthead = styled.div`
width: 737px;
height: 112px;
padding-bottom: 200px;
padding-top: 150px;
margin-top: -75px;
margin-left: 15%;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;
text-align: center;

color: #000000;
`

const Text = styled.div`
width: 499px;
height: 62px;
margin: ${props => props.margin}

font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 69px;

color: #000000;
`
export default class Pet3 extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <Texthead>Reason Not to Adopt Red Pandas</Texthead>
                        </div>
                    </div>
  <div class="row">
    <div class="col-lg"><Icon src="images\food.jpg" margin="0px 0px 50px 0px" alt="food1"/></div>
    <Text margin="10px 0px 0px -300px">Eats alot of Bamboo</Text>
    <div class="col-lg"><Icon src="images\food.jpg" margin="0px 0px 50px 0px" alt="food2"/></div>
    <Text margin="10px -200px 0px -300px">Require large enclosure</Text>
    
    <div class="w-100"></div>
    <div class="col-lg"><Icon src="images\food.jpg" margin="0px 0px 50px 0px" alt="food3"/></div>
    <Text margin="10px 0px 0px -300px">Medical Cares</Text>
    <div class="col-lg"><Icon src="images\food.jpg" margin="0px 0px 50px 0px" alt="food4"/></div>
    <Text margin="10px -200px 0px -300px">Strong Smell</Text>
    <div class="w-100"></div>
    <div class="col-lg"><Icon src="images\food.jpg" margin="0px 0px 50px 0px" alt="food5"/></div>
    <Text margin="10px 0px 0px -300px">Noctunal</Text>
    <div class="col-lg"><Icon src="images\food.jpg" margin="0px 0px 50px 0px" alt="food6"/></div>
    <Text margin="10px -200px 0px -300px">Agressive</Text>
    <div class="w-100"></div>
    <div class="col-lg"><Icon src="images\food.jpg" margin="0px 0px 50px 0px" alt="food7"/></div>
    <Text margin="10px 0px 0px -300px">Illegal</Text>
    <div class="col-lg"><Icon src="images\food.jpg" margin="0px 0px 50px 0px" alt="food8"/></div>
    <Text margin="10px -200px 0px -300px">Endangered Species</Text>
  </div>
</div>
                {/* <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food1"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food2"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food3"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food4"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food5"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food6"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food7"/>
                <Icon src="images\food.jpg" margin="-200px 300px 0px 350px" alt="food8"/> */}
            </div>
        )
    }
}
