import React, { Component } from 'react'
import styled from 'styled-components'

const Texthead = styled.div`
width: 768px;
height: 145px;
padding-top: 0%;
margin-top: -13%;
margin-left: 20%;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-indent: 20px;

color: #ffffff;
`
const Text = styled.p`

width: 768px;
height: 145px;
margin-top: -3%;
margin-left: 18%;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 37px;
text-indent: 20px;

color: #ffffff;
`

const Rectangle = styled.div`
width: 967px;
height: 228px;
margin-top: 15%;
margin-left: 0%;
margin-bottom: 0%;

background: #333333;
`
const Icon = styled.img`
width: 111px;
height: 111px;
margin-top: 6%;
margin-left: 4%;


`

export default class Eat3 extends Component {
    render() {
        return (
            <div>
               
                <Rectangle><Icon src="images\candy.png"  /><Texthead>แพนด้าแดงนั้นสามารถลิ้มรสสารให้ความหวานได้ จนถึงตอนนี้ก็คิดว่ามีเพียง ไพรเมต*เท่านั้นที่สามารถลิ้มรสแอสปาร์แตมได้ แพนด้าแดงนั้นไม่เพียงสามารถ ที่จะสามารถลิ้มรสได้ แต่พวกมันกลับชอบด้วยซ้ำ</Texthead><Text>* เป็นอันดับของสัตว์เลี้ยงลูกด้วยน้ำนม อันได้แก่ สัตว์จำพวกลีเมอร์, ลิง และลิงไม่มีหางซึ่งรวมถึงมนุษย์ด้วย</Text></Rectangle>
                
            </div>
        )
    }
}
