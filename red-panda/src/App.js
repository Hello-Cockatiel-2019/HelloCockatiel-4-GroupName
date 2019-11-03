import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import LogoRedpanda from './components/LogoRedpanda'
import Kmutt from './components/Kmutt'
import Sit from './components/Sit'
import About from './components/About'
import Orange from './components/Orange'
import Location from './components/Location'
const Spacer = styled.div`
height: 400px;
`

const PropsBox = styled.div(props => ({
  background: props.background,
  height: '1024px',
  width: '99px',
  position: 'absolute',
  margin: props.margin,
  

}));
const Propsdiv = styled.div(props => ({
  padding: props.padding

}));
const Propsdimg = styled.img(props => ({
  padding: props.padding,
  margin: props.margin

}));

function App() {
  return (
    <div>
      <Propsdiv padding="0px 0px 400px 0px">
      <PropsBox background="#F78A68" />
      <PropsBox background="#4F4F4F" margin="0px 0px 0px 134px" />
      <div class="container">
  <div class="row align-items-start">
    <div class="col-lg-10">
    </div>
    <div class="col-lg-auto">
      <Kmutt />
    </div>
    <div class="col-lg-auto">
      <Sit />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col-lg">
    </div>
    <div class="col-lg">
      <LogoRedpanda />
    </div>
    <div class="col-lg">
    </div>
  </div>
</div>
      <PropsBox background="#F78A68" margin="-804px 0px 0px 1804px" />
      <PropsBox background="#4F4F4F" margin="-804px 0px 0px 1668px" />
   </Propsdiv>
   <Propsdiv padding="0px 0px 400px 0px">
   
   
      <div class="container">
        <div class="row">
        <Propsdimg src="images\redpanda1.jpg" alt="redpanda1" margin="0px 0px 0px -400px" />
        <div class="col-lg-auto">
      </div>
          <div class="col-lg-4">
      <About  />
     
  
      </div>
      </div>
      </div>
  

   </Propsdiv>
    </div>
  );
}

export default App;
