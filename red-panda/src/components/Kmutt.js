import React, { Component } from 'react'
import styled from 'styled-components'

const Kmutt = styled.img`
width: 94px;
height: 94px;
margin-top: 30px;
margin-left: -25px;
`

export default class KmuttSit extends Component {
    render() {
        return (
            <div>
                  <Kmutt src="/images/Kmutt.png" alt="KMUTT" />  
                  
        
                  </div>
        )
    }
}
