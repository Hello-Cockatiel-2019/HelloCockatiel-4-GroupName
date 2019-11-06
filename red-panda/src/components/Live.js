import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.div`
width: 649px;
height: 319px;


font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: left;
`

const Texthead = styled.div`
width: 737px;
height: 112px;
margin-top: 70%;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;

color: #000000;
`

export default class Live extends Component {
    render() {
        return (
            <div>
               <Texthead>ที่ไหนที่แพนด้าแดงจะอาศัยอยู่ ?</Texthead> 
               <Text>ที่อยู่อาศัยของแพนด้าแดงเกือบ 50% อยู่ในเทือกเขาหิมาลัย ตะวันออกพวกมันจะใช้หางยาวที่เป็นพวงเพื่อสร้าง ความอบอุ่นให้ตัวเองในฤดูหนาว</Text>
            </div>
        )
    }
}
