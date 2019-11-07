import React, { Component } from 'react'
import styled from 'styled-components'

const Logosmall = styled.img`
width: 80px;
height: 80px;
margin-top 50px;
margin-left: -230%;
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
