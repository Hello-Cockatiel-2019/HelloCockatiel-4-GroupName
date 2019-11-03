import React, { Component } from 'react'
import styled from 'styled-components'

const Sit = styled.img`
width: 166px;
height: 53px;
margin: 30px -100px -140px -30px;
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
