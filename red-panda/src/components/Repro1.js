import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 800px;
height: 112px;
margin-top: 0px;
margin-left: -200px;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;
text-align: right;

color: #000000;
`
const Text = styled.div`
width: 649px;
height: 152px;
margin: ${props => props.margin}

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: right;

color: #000000;
`
export default class Pet extends Component {
    render() {
        return (
            <div>
                <Texthead>การเจริญพันธุ์</Texthead>
                <Text margin="0px 0px 0px -50px">แพนด้าแดงโตเต็มที่เมื่ออายุสอง ถึงสามปี ตัวเมียรวบรวมหญ้าและใบไม้เพื่อสร้างรัง ก่อนคลอดลูก เด็กเเรกเกิดจะหูหนวกและตาบอด แม่ใช้เวลาตลอดเวลากับลูกหนึ่งสัปดาห์ จากนั้นแม่ก็จะเริ่มออกไปหาอาหาร </Text>
           
            </div>
        )
    }
}
