import React from 'react';
import './App.css';
import styled from 'styled-components'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import LogoRedpanda from './components/LogoRedpanda'
import Kmutt from './components/Kmutt'
import Sit from './components/Sit'
import Logosmall from './components/Logosmall'
import About from './components/About'
import Desktop from './components/Desktop'
import Help from './components/Help'
import Contact from './components/Contact'
import Hunter from './components/Hunter'
import Repro1 from './components/Repro1'
import Repro2 from './components/Repro2'
import Pet1 from './components/Pet1'
import Pet2 from './components/Pet2'
import Pet3 from './components/Pet3'
import Behavior1 from './components/Behavior1'
import Behavior2 from './components/Behavior2'
import Behavior3 from './components/Behavior3'
import Live from './components/Live'
import Eat1 from './components/Eat1'

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
padding: ${props => props.padding}
`

const Text = styled.div`
width: 649px;
height: 319px;
margin: ${props => props.margin}

font-family: Teko;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 34px;
text-align: center;
`
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
function App() {
  return (
    <div>
      {/* <Propsdiv class="Desktop1" padding="0px 0px 0px 0px">
<Rightcorner margin="0px 300px 0px 0px"><Kmutt /></Rightcorner><Rightcorner margin="0px 200px 0px 0px"><Sit /></Rightcorner>
      <div class="container">
      <div class="row">
        <div class="col-lg-4">
        <Desktop />
        </div>
      </div>
      </div>

      </Propsdiv> */}
      <Propsdiv class="Desktop2" padding="0px 0px 400px 0px">
      
      <div class="container">
      <PropsBox background="#F78A68" margin="0px 0px 0px -400px"/>
      <PropsBox background="#4F4F4F" margin="0px 0px 0px -250px" />

  <div class="row align-items-start">
    <div class="col-lg-9">
    
    </div>
    <div class="col-lg-1">
    <Logosmall />
     
    </div>
    <div class="col-lg-1">
    <Kmutt />
    </div>
    <div class="col-lg-1">
    <Sit />
    </div>
  </div>
  <div class="row align-items-center">
   
    <div class="col-lg-auto">
      <LogoRedpanda />
    </div>
  
  </div>
  <PropsBox background="#F78A68" margin="-990px 0px 0px 1260px" />
<PropsBox background="#4F4F4F" margin="-990px 0px 0px 1410px" />
</div>


   </Propsdiv>

   <nav class="navbar sticky-top navbar-dark bg-dark">
  <Navtext>Red Panda</Navtext>
</nav>
      
      <ScrollAnimation animateIn="fadeIn"><Propsdiv class="AboutRedpanda" padding="200px 0px 400px 0px">
      <div class="container">
        <div class="row">
        <Propsdimg src="images\redpanda.jpg" alt="redpanda" width="529.59px" height="642px" margin="0px 0px 0px -100px" />
        <div class="col-lg-auto">
      </div>
          <div class="col-lg-4">
      <About  />
      </div>
      </div>
      </div>
  
      
   </Propsdiv>
      </ScrollAnimation>
      <Propsdiv class="Possition" padding="0px 0px 400px 0px">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <Img src="images\map.png" width="950px" height="1100px" margin="0px 0px 0px -400px" />
              <Img src="images\place.png" width="50px" height="50px" margin="-1200px 0px 0px 0px" />
              <Text margin="-675px 0px 0px -300px">เทือกเขาหิมาลัย</Text>
            </div>
            <div class="col-lg-6">
<Live />
            </div>
          </div>
        </div>
      </Propsdiv> 

      <Propsdiv class="Eat" padding="400px 0px 400px 0px">
      <div class="container">
      <div class="row">
      <div class="col-lg-6"><Img src="images\pandaeat.jpg" width="553px" height="570px" margin="0px 0px 0px 0px" /></div>
      <div class="col-lg-6"><Eat1 /></div>
      <div class="row">
      <div class="col-lg">icon</div>
      </div>
      <div class="row">
      <div class="col-lg">content</div>
      </div>
      </div>  
      </div>  
      </Propsdiv> 
      <Propsdiv class="Behavior" padding="400px 0px 400px 0px">
    <div class="container">
      <div class="row">
        <div class="col-lg"><Img src="images/redpandastand.jpg" alt="redpandastand" width="437px" height="598px" margin="0px 0px 0px -100px"/></div>
        <div class="col-lg"><Behavior1 /></div>
      </div>
      <div class="row">
        <div class="col-lg">
          <Img src="images/redpanda1.jpg" alt="redpandastand" width="390px" height="306px" margin="0px 0px 0px 0px"/>
<Behavior2 />
        </div>
        <div class="col-lg">
          <Img src="images/redpanda2.jpg" alt="redpandastand" width="468px" height="306px" margin="0px 0px 0px 0px"/>
<Behavior3 />
          </div>
      </div>
      </div> 
      </Propsdiv>
      <Propsdiv class="Reproduction" padding="0px 0px 400px 0px">
        <div class="container">
          <div class="row">
            <div class="col-lg">
              <Repro1 />
  <Img src="images\redpanda3.jpg" alt="redpanda3" width="486px" height="477px" margin="-250px 0px 0px 600px" />
            </div>
            <div class="w-100"/>
            <div class="col-lg">
             <Repro2 />
            </div>
            </div>
          </div>
       
      </Propsdiv>
      <Propsdiv class="Pet" padding="0px 0px 400px 0px">
        <div class="container">
          <div class="row">
            <div class="col-lg-auto">
            <Img src="images\redpanda4.jpg" alt="redpanda5" width="345px" height="376px" margin="0px 0px 0px -100px" />
            </div>
            <div class="col-lg-auto">
           
           
             <Pet1 />
            </div>
            <div class="row">
            <div class="col-lg-auto">
              <Pet3 />
            </div>
            <div class="col-lg-auto">
            </div>
            <div class="row">
            <div class="col-lg-auto">
              
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
