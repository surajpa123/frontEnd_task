import React from 'react'
import { Main } from './Content'
import styled from 'styled-components'
import style from "./know.module.css"

const Profile = styled.div`
    /* border: 1px solid red; */
    height: 100px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* display: flex; */
`
const Logo = styled.img`
     /* border: 1px solid blue; */
     width: 20%;
     /* float: right; */
     height: 70px;
     border-radius: 50%;
     margin-left: 10% ;
     

    
`

const Button = styled.button`
 background-color: rgb(49,160,208);
 margin: 4% 2%;
 color: white;
    float: right;
    padding: 5px 20px 5px 20px;
    font-size: 18px;
    height: 45px;
    width: 50%;
    
`

const Text = styled.div`
    font-size: 30px;
    font-weight: 500;
 width: 10%;
    /* border: 1px solid red; */
   margin-top: 1%;
 margin-left: 7%;
   float: left;

    
`
const Div = styled.div`
    /* border: 1px solid red; */
    float: right;
    display: flex;
    width: 20%;
    margin-top: 0.5%;
`

const Knowledge = () => {
  return (
   <Main>

<Profile>
  <Text>KNOWLEDGE</Text> 
  <Div>
<Button>Create Cource</Button> 
<Logo src='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'>

</Logo>
</Div>
</Profile>

<div className={style.productDiv}>

<div className={style.links}>
    <div className={style.left}>
        <div>ALL</div>
        <div>LIVE</div>
        <div>DRAFT</div>
        <div>ARCHIEVED</div>
    </div>
    <div className={style.right}>
        <select name="" id="">
            <option value="">Select Team</option>
            <option value="">Alpha</option>
            <option value="">Bravo</option>
        </select>
    </div>
</div>


<div className={style.products}>

    <div>
        <div>
            <img src="https://media.istockphoto.com/photos/digital-marketing-concept-online-advertisement-picture-id1284549946?k=20&m=1284549946&s=612x612&w=0&h=VVGNI_vARpvpqo2Md_xsfcSiotjVVjzisV75dF15T-0=" alt="" />
        </div>
        <div className={style.contents}>
     <h4 style={{marginLeft:"4%"}}>MRKETINGS</h4>
    <p style={{marginLeft:"4%"}}>Last Update : 04/05/2022</p>
    <button className={style.marketing}>MARKETING</button>
        </div>
    </div>
    <div>
    <div>
        <img src="https://neilpatel.com/wp-content/uploads/2021/07/digital-marketing_featured-image.png" alt="" />
    </div>
    <div className={style.contents}>
     <h4 style={{marginLeft:"4%"}}>MRKETINGS</h4>
    <p style={{marginLeft:"4%"}}>Last Update : 07/05/2022</p>
    <button className={style.marketing}>MARKETING</button>
        </div>
    </div>
    <div>
    <div>
        <img src="data:image/png;base64,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" alt="" />
    </div>
    <div className={style.contents}>
     <h4 style={{marginLeft:"4%"}}>MRKETINGS</h4>
    <p style={{marginLeft:"4%"}}>Last Update : 01/05/2022</p>
    <button className={style.marketing}>Sales</button>
        </div>
    </div>
    <div>
    <div><img src="https://image.shutterstock.com/image-photo/hand-marker-writing-marketing-strategy-260nw-522186031.jpg" alt="" /></div>
    <div className={style.contents}>
     <h4 style={{marginLeft:"4%"}}>MRKETINGS</h4>
    <p style={{marginLeft:"4%"}}>Last Update : 03/05/2022</p>
    <button className={style.marketing}>MARKETING</button>
        </div>
    </div>

    <div>
    <div>
        <img src="https://www.moneycrashers.com/wp-content/uploads/2019/11/header3.png" alt="" />
    </div>
    <div className={style.contents}>
     <h4 style={{marginLeft:"4%"}}>MRKETINGS</h4>
    <p style={{marginLeft:"4%"}}>Last Update : 05/02/2022</p>
    <button className={style.marketing}>Sales</button>
        </div>
    </div>
    <div>
    <div>
        <img src="https://enterpriseleague.com/blog/wp-content/uploads/negotiate-price.jpg" alt="" />
    </div>
    <div className={style.contents}>
     <h4 style={{marginLeft:"4%"}}>SALES</h4>
    <p style={{marginLeft:"4%"}}>Last Update : 04/05/2022</p>
    <button className={style.marketing}>Sales</button>
        </div>
    </div>
    <div>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn72MkSIDpUYSpJkmGSWLvsnmCPVuRbSKbwH74s7VG7CAnlxFvM7yO_SsB61VPqJ798-0&usqp=CAU" alt="" />
    </div>
    <div className={style.contents}>
     <h4 style={{marginLeft:"4%"}}>SALES</h4>
    <p style={{marginLeft:"4%"}}>Last Update : 08/05/2022</p>
    <button className={style.marketing}>Sales</button>
        </div>
    </div>


</div>

</div>


   </Main>
  )
}

export default Knowledge