import React, { Component } from 'react'
import styled from 'styled-components'

const Sit = styled.img`
width: 136px;
height: 53px;
margin-top: 70px; 
margin-left: -200%;

`
export default class KmuttSit extends Component {
    render() {
        return (
            <div>
                  
                  <Sit src="/images/sit.jpg" alt="SIT" />
        
                  </div>
        )
    }
}
