import React, { Component } from 'react'
import styled from 'styled-components'

const Orange1 = styled.div `
height: 1024px;
weight: 99px;
margin-left: -400px;
margin-right: 400px;
background: #F78A68;
`
const Possitionleft = styled.div`
margin-left: -400px;
margin-right: 400px;
`

const Possitionright = styled.div`
margin-left: 400px;
margin-right: -400px;
`

const PropsBox = styled.div(props => ({
    background: props.background,
    height: '1024px',
    width: '99px',
    margin: props.margin

  }));
  
export default class Orange extends Component {
    render() {
        return (
            <div>
               
                <PropsBox background="#F78A68" margin="0px 400px 0px -400px"/>
                <PropsBox background="#4F4F4F" margin="0px -400px 0px 400px"/>
            </div>
        )
    }
}
