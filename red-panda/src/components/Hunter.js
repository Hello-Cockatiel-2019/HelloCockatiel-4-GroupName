import React, { Component } from 'react'
import styled from 'styled-components'

const Icon = styled.img`
margin: ${props => props.margin}
padding: 10px 10px 10px 10px;

background: ${props => props.background}
`

const Border = styled.div`
border: 5px solid #000000;
box-sizing: border-box;
`
const Img = styled.img`
height: ${props => props.height}
width: ${props => props.width}
margin: ${props => props.margin}
border: ${props => props.border}
`

const Texthead = styled.div`
width: ${props => props.width}
height: ${props => props.height}
padding-bottom: 200px;
margin: ${props => props.margin}


font-family: 'Kanit';
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 52px;
text-align: center;

color: #000000;
`

const Text = styled.div`
width: ${props => props.width}
height: ${props => props.height}
margin: ${props => props.margin}
padding-bottom: 300px;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: center;
text-indent: 20px;

color: #000000;
`
const Rectangle = styled.div`
width: 357px;
height: 243px;
background: ${props => props.background}
margin: ${props => props.margin}
`

export default class Hunter extends Component {
    render() {
        return (
            <div>
                <Texthead height="112px" width="850px" margin="0px 0px 0px 75px">สิ่งที่เป็นภัยคุกคามต่อแพนด้าแดง</Texthead>
                <Img src="images\snowleopard.png" alt="snowleopard" height="245px" width="245px" margin="0px 150px 0px -25px"/>
                <Img src="images\mustelid.png" alt="mustelid" height="245px" width="245px" margin="0px 150px 0px 0px"/>
                <Img src="images\human.png" alt="human" height="245px" width="245px" margin="0px 0px 0px 0px"/>
                <Texthead height="112px" width="500px" margin="50px 0px 0px -150px">เสือดาวหิมะ</Texthead>
                <Texthead height="112px" width="500px" margin="-200px 0px 0px 250px">เพียงพอน</Texthead>
                <Texthead height="112px" width="500px" margin="-200px 0px 0px 645px">มนุษย์</Texthead>
                <Texthead margin="50px 100px 75px 0px">วิธีการเอาตัวรอดของเเพนด้าเเดง</Texthead>
                 <Img src="images\redpanda5.png" alt="redpanda5" height="451px" width="336px" margin="0px 0px 0px 100px"/> 
                 <Img src="images\redpanda6.png" alt="redpanda6" height="342px" width="343px" margin="-565px 0px 0px 550px"/>
                <Text height="129px" width="384px" margin="0px 0px 0px 75px">หมีแพนด้าสีแดงจะพยายามหลบหนีโดยการวิ่งขึ้นไปบนหินหรือต้นไม้</Text>
                <Text height="129px" width="384px" margin="-300px 0px 0px 525px">หรือพยายามข่มขู่โดย ยืนอยู่บนขาหลังและขยายกรงเล็บ</Text>
                <Texthead height="112px" width="1200px" margin="-100px 0px 50px -100px">เหตุผลที่ทำไมแพนด้าแดงจึงเป็นสัตว์ใกล้สูญพันธุ์</Texthead>
                <Text height="199px" width="649px" margin="-75px 0px 50px 150px">แพนด้าแดงกำลังเผชิญกับภัยคุกคามหลายอย่างรวมถึงการตัดไม้ทำลายป่าไม้ไผ่เพิ่มความตายจากโรคไข้หัดสุนัขเนื่องจากการบุกรุก ของมนุษย์การสูญเสียที่อยู่อาศัยและการลักลอบล่าสัตว์ </Text>
                
                <Icon src="images\treerecovery.png" background="#6FC66D" margin="-200px 300px 0px 250px" alt="treerecovery"/>
                <Texthead height="62px" width="600px"margin="-140px 0px 0px 300px">การตัดไม้ทำลายป่าของไม้ไผ่</Texthead>
                
                <Icon src="images\building.png" background="#FF5752" margin="-100px 300px 0px 250px" alt="building.png"/>
                <Texthead height="62px" width="499px"margin="-90px 0px 0px 270px">สูญเสียที่อยู่อาศัย</Texthead>
                
                <Icon src="images\excavator.png" background="#FB7E49" margin="-100px 300px 0px 250px" alt="excavator"/>
                <Texthead height="62px" width="499px"margin="-90px 0px 0px 210px">การรุกล้ำ</Texthead>
            </div>
        )
    }
}

