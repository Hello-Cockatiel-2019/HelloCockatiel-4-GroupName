import React, { Component } from 'react'
import styled from 'styled-components'

const Sit = styled.img`
width: 166px;
height: 53px;
margin-top: 70px; 
margin-left: 0px;
`
export default class KmuttSit extends Component {
    render() {
        return (
            <div>
                  
                  <Sit src="/images/Sit.png" alt="SIT" />
        
                  </div>
        )
    }
}
