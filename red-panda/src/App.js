import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import LogoRedpanda from './components/LogoRedpanda'
import Kmutt from './components/Kmutt'
import Sit from './components/Sit'
import About from './components/About'
import Location from './components/Location'
const Spacer = styled.div`
height: 400px;

`
import Desktop from './components/Desktop'
import Help from './components/Help'
import Contact from './components/Contact'
import Hunter from './components/Hunter'
import Repro1 from './components/Repro1'
import Repro2 from './components/Repro2'
import Pet1 from './components/Pet1'
import Pet2 from './components/Pet2'
import Pet3 from './components/Pet3'

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

const Propsdiv = styled.div`
padding: ${props => props.padding}
`
const Propsdivcolor1 = styled.div`
background-color: #2E2E2E;

`
const Propsdivcolor2 = styled.div`
background-color: #DE4D20;
padding: 0px 0px 400px 0px;
`
const Propsdimg = styled.img(props => ({
padding: props.padding,
margin: props.margin

}));
const Img = styled.img`
height: ${props => props.height}
width: ${props => props.width}
margin: ${props => props.margin}
border: ${props => props.border}
`
function App() {
  return (
    <div>
      <Propsdiv class="Desktop1" padding="0px 0px 0px 0px">
<Rightcorner margin="0px 300px 0px 0px"><Kmutt /></Rightcorner><Rightcorner margin="0px 200px 0px 0px"><Sit /></Rightcorner>
      <div class="container">
      <div class="row">
        <div class="col-lg-4">
        <Desktop />
        </div>
      </div>
      </div>

      </Propsdiv>
      <Propsdiv class="Desktop2" padding="0px 0px 400px 0px">
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

<PropsBox background="#F78A68" margin="-1241px 0px 0px 2014px" />
<PropsBox background="#4F4F4F" margin="-1241px 0px 0px 1874px" />
   </Propsdiv>
      <Propsdiv class="AboutRedpanda" padding="0px 0px 400px 0px">
      <div class="container">
        <div class="row">
        <Propsdimg src="images\redpanda.jpg" alt="redpanda" margin="0px 0px 0px -400px" />
        <div class="col-lg-auto">
      </div>
          <div class="col-lg-4">
      <About  />
     
  
      </div>
      </div>
      </div>
  
      
   </Propsdiv>
      <Propsdiv class="Reproduction" padding="0px 0px 400px 0px">
        <div class="container">
          <div class="row">
            <div class="col-lg-auto">
              <Img src="images\redpanda3.jpg" alt="redpanda3" width="451px" height="338px" margin="0px 0px 0px -230px" />
            </div>
            <div class="col-lg-auto">
              <Repro1 />
            </div>
            <div class="row">
            <div class="col-lg-auto">
             <Repro2 />
            </div>
            <div class="col-lg-auto">
            <Img src="images\redpanda4.jpg" alt="redpanda4" width="520px" height="346px" margin="100px 0px 0px 0px" />
            </div>
            
            
            </div>
          </div>
        </div>
      </Propsdiv>
      <Propsdiv class="Pet" padding="0px 0px 400px 0px">
        <div class="container">
          <div class="row">
            <div class="col-lg-auto">
              <Img src="images\redpanda5.jpg" alt="redpanda5" width="451px" height="338px" margin="0px 0px 0px -230px" />
            </div>
            <div class="col-lg-auto">
              <Pet1 />
            </div>
            <div class="row">
            <div class="col-lg-auto">
              <Pet2 />
            </div>
            <div class="col-lg-auto">
            <Img src="images\redpanda6.jpg" alt="redpanda6" width="520px" height="346px" margin="100px 0px 0px 0px" />
            </div>
            <div class="row">
            <div class="col-lg-auto">
              <Pet3 />
            </div>
            </div>
            </div>
          </div>
        </div>
      </Propsdiv>
      <Propsdiv class="Hunters" padding="0px 0px 400px 0px">
    <div class="container">
          <div class="row">
            <div class="col-lg">
              <Hunter />            
            </div>
          </div>
            
        </div>
    </Propsdiv>
      <Propsdivcolor1 class="HelpRedpanda">
      
        <div class="container">
          <div class="row">
            <div class="col-lg">
              <Help />
            </div>
          </div>
            
        </div>

      </Propsdivcolor1>
      <Propsdivcolor2 class="ContactUs">
      <div class="container">
          <div class="row">
            <div class="col-lg">
              <Contact />
            </div>
          </div>
            
      </div>
     </Propsdivcolor2>
      
    </div>
  );
}

export default App;
{/* <PropsBox background="#F78A68" />
<PropsBox background="#4F4F4F" margin="0px 0px 0px 134px" />
<PropsBox background="#F78A68" margin="-804px 0px 0px 1804px" />
<PropsBox background="#4F4F4F" margin="-804px 0px 0px 1668px" /> */}
