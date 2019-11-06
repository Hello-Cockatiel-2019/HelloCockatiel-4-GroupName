import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 737px;
height: 112px;
margin-left: 15%;
margin-top: 102px;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;
text-align: center;
text-align: center;

color: #FFFFFF;
`
const Text = styled.div`
width: 649px;
height: 319px;
margin: ${props => props.margin}


font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: center;
text-indent: 20px;

color: #FFFFFF;
`
const Img = styled.img`
height: ${props => props.height}
width: ${props => props.width}
margin: ${props => props.margin}

`
export default class Help extends Component {
    render() {
        return (
            <div>
                <Texthead>ช่วยเเพนด้าเเดงด้วย!</Texthead>
                <Img src="images\redpanadhelp.jpg" width="437px" height="328px" margin="34px 0px 0px 315px" />
                <Text margin="45px 0px 0px 180px">IUCN ได้จำแนกแพนด้าแดงเป็นสัตว์ที่ใกล้จะสูญพันธุ์ตั้งแต่ปี 2551 จำนวนประชากรทั่วโลกอยู่ในช่วงประมาณ 2,500 ถึง 20,000 ตัว ประชากรของเผ่าพันธุ์ลดลงประมาณร้อยละ 50 </Text>
                <Text margin="-200px 0px 0px 180px">ในช่วงสามชั่วอายุคนและคาดว่าจะลดลงอย่างต่อเนื่องในอัตราเร่ง แพนด้าแดงกว่าครึ่งตายเกี่ยวข้องโดยตรงกับกิจกรรมของมนุษย์</Text>
                <Img src="images\wwf.png" width="191px" height="283px" margin="-150px 0px 0px 400px"/>            
                <Text margin="80px 0px 0px 180px"> คุณสามารถช่วยเหลือการอนุรักษ์ในสวนสัตว์และในป่าโดยบริจาคให้ WWF หรือเครือข่ายแพนด้าแดง</Text>
                </div>
        )
    }
}
