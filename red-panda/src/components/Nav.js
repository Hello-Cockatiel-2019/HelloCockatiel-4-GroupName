import React, { Component } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';

const Text = styled.div`
margin-bottom: 30%;
`

export default class Nav extends Component {

    render() {
        return (
           <Navbar bg="dark" expand="lg">
               <Accordion>
               <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
          <Text>
            test
          </Text>
      </Accordion.Collapse>
      </Accordion>
           </Navbar>
        )
    }
}
