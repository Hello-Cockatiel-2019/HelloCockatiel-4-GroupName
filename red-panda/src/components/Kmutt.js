import React, { Component } from 'react'
import styled from 'styled-components'

const Kmutt = styled.img`
width: 154px;
height: 154px;
margin-top: 5%;
margin-left: -80%;
`

export default class KmuttSit extends Component {
    render() {
        return (
            <div>
                  <Kmutt src="/images/kmutt.jpg" alt="KMUTT" />  
                  
        
                  </div>
        )
    }
}
