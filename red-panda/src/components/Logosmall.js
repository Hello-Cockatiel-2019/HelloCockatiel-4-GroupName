import React, { Component } from 'react'
import styled from 'styled-components'

const Logosmall = styled.img`
width: 94px;
height: 94px;
margin-top 30px;
margin-left: -75px;
`
export default class Logo extends Component {
    render() {
        return (
            <div>
                <Logosmall src="images/logosmall.jpg" alt="Logosmall" />  
            </div>
        )
    }
}
