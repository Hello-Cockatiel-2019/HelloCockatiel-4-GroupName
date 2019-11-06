import React, { Component } from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Navtext = styled.p`
margin-top: 5px;
margin-bottom: -5px;
margin-left: 45%;

font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 40px;
text-align: center;

color: #ffffff;
`



export default class Example extends React.Component {
    showSettings (event) {
      event.preventDefault();
      
      
      
    }
  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return (
     
    
     
          <Navbar sticky="top" bg="dark" variant="dark">
   
      <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
    >

        <SideNav.Toggle />
        
       
    </SideNav>
   
          <Navtext>Red Panda</Navtext>
  

      </Navbar>



        // <nav class="navbar sticky-top navbar-dark bg-dark">
        // <Navtext>Red Panda</Navtext>
       
        // </nav>
        
                 
      );
    }
  }

