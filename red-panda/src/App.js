import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import LogoRedpanda from './components/LogoRedpanda'
import Kmutt from './components/Kmutt'
import Sit from './components/Sit'
import About from './components/About'
import Desktop from './components/Desktop'


const Rightcorner = styled.div`
position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
  margin: ${props => props.margin}
`

const PropsBox = styled.div(props => ({
  background: props.background,
  height: '1224px',
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
      <Propsdiv padding="0px 0px 0px 0px">
<Rightcorner margin="0px 300px 0px 0px"><Kmutt /></Rightcorner><Rightcorner margin="0px 200px 0px 0px"><Sit /></Rightcorner>
      <div class="container">
      <div class="row">
        <div class="col-lg-4">
        <Desktop />
        </div>
      </div>
      </div>

      </Propsdiv>
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
   
    <div class="col-lg-auto">
      <LogoRedpanda />
    </div>
  
  </div>
</div>
      
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
  
      <PropsBox background="#F78A68" margin="-2209px 0px 0px 1804px" />
<PropsBox background="#4F4F4F" margin="-2209px 0px 0px 1668px" />
   </Propsdiv>
   
    </div>
  );
}

export default App;
{/* <PropsBox background="#F78A68" />
<PropsBox background="#4F4F4F" margin="0px 0px 0px 134px" />
<PropsBox background="#F78A68" margin="-804px 0px 0px 1804px" />
<PropsBox background="#4F4F4F" margin="-804px 0px 0px 1668px" /> */}
