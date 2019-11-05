import React, { Component } from 'react'
import styled from 'styled-components'

const Head = styled.div`
width: 566px;
height: 112px;
padding-bottom: 150px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 71px;

color: #000000;
`
const Text = styled.div`
width: 649px;
height: 64px;

font-family: Spectral;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;

color: #000000;
`
const Texticon = styled.div`
position: absolute;
width: 250px;
height: 62px;
margin: ${props => props.margin}


font-family: Teko;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 34px;

color: #000000;
`
const Icon = styled.img`
margin: ${props => props.margin}
background: ${props => props.background}
padding: 10px 10px 10px 10px;
`

const Border = styled.div`
border: 5px solid #000000;
box-sizing: border-box;
`

export default class About extends Component {
    render() {
        return (
            <div>
                <Head>เเพนด้าเเดงคือ.. </Head>
                <Text>สัตว์ที่มีขนาดใหญ่กว่าแมวบ้าน มีรูปร่างเหมือนหมีและขนสีน้ำตาลปนแดง หนาเล็กน้อย ท้องและแขนขามีสีดำเครื่องหมายสีขาวคล้ายๆคิ้วบน ดวงตาเล็กๆของมัน แพนด้าแดงเป็นสัตว์ที่มีทักษะการใช้ชีวิตบน ต้นไม้ และมันจะใช้ชีวิตบนต้นไม้เป็นส่วนใหญ่ </Text>
                <Icon src="images\food.png" margin="200px 0px 0px 50px" alt="food" background="#FFC93F" />
                <Texticon margin="-60px 0px 0px 150px">บริโภคทั้งพืชและสัตว์</Texticon>
                <Icon src="images\tree.png" margin="-110px 0px 0px 400px" alt="tree" background="#009B6B" />
                <Texticon margin="-80px 0px 0px 500px">ใช้ชีวิตบนต้นไม้</Texticon>
            </div>
        )
    }
}
