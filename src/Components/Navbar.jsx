import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'

import { Link } from 'react-router-dom'


const Navbar = () => {
const Div = styled.div`
border: 1px solid black;
height: 1100px;
width: 20rem;
font-weight: 800;
margin-bottom: 4%;
color: white;
background-color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Div2 = styled.div`
  /* border: 1px solid red; */
  height: 50px;
  margin: 4%;
  font-weight: 600;
  display: flex;
  font-size: 20px;


`

const DivUpper = styled.div`
  margin-bottom: 10%;
  /* border: 1px solid blue; */
  margin-top: 10%;
  text-align: center;
  font-size: 20px;
`

const Divsmall = styled.div`
  margin:4%;
  /* border: 1px solid red; */
  height: 30px;
  padding: 4%;
 
  cursor:pointer;
  display:flex;
  :hover{
    background-color: rgb(51,51,51);
    /* height: 40px; */
    width: 90%;
    
  }
`

const H5 = styled.h5`
width: 10%;
`
const Divdown = styled.div`
  /* border: 1px solid red; */
margin: 15rem  0 0 1rem;
  height: 300px;
  width: 70%;
  
`
 


  return (
    <>
   <Div>
     
    <DivUpper> Remote SalesFuel</DivUpper>

    <Div2> <Divsmall style={{margin:"4%",cursor:"pointer", display:"flex"}}><img src="https://img.icons8.com/ios/20/FFFFFF/home--v1.png"/>   <div style={{marginLeft:"30px",}}>DASHBOARD</div></Divsmall>  </Div2>
    <Div2> <Divsmall style={{margin:"5%"}}><img src="https://img.icons8.com/ios/24/FFFFFF/motarboard.png"/><div style={{marginLeft:"30px",}}> <Link to={"/knowledge"} style={{textDecoration:"none",color:"white"}}>  KNOWLEDGE</Link></div></Divsmall> </Div2>
    <Div2> <Divsmall  style={{margin:"5%"}}><img src="https://img.icons8.com/windows/24/FFFFFF/defend-family--v3.png"/><div style={{marginLeft:"30px",}}> <Link to={"/members"} style={{textDecoration:"none",color:"white"}}>MEMBERS</Link></div></Divsmall>  </Div2>
    <Div2> <Divsmall style={{margin:"5%"}}><img src="https://img.icons8.com/ios/24/FFFFFF/microsoft-teams-2019.png"/><div style={{marginLeft:"30px",}}>TEAMS</div></Divsmall> </Div2>
    <Div2><Divsmall style={{margin:"5%"}}>  <img src="https://img.icons8.com/ios-filled/24/FFFFFF/transform-clip.png"/><div style={{marginLeft:"30px",}}>VALUT</div></Divsmall></Div2>
    <Div2><Divsmall style={{margin:"5%"}}> <img src="https://img.icons8.com/wired/24/FFFFFF/chat.png"/><div style={{marginLeft:"30px",}}>CHAT</div></Divsmall></Div2>
     


    <Divdown>
    <Divsmall style={{margin:"4%",cursor:"pointer", display:"flex"}}><img src="https://img.icons8.com/ios/20/FFFFFF/settings--v1.png"/> <div style={{marginLeft:"30px",}}>SETTINGS</div></Divsmall> 
    <Divsmall style={{margin:"4%",cursor:"pointer", display:"flex"}}><img src="https://img.icons8.com/ios/20/FFFFFF/company.png"/>  <div style={{marginLeft:"30px",}}>COMPANY</div></Divsmall> 
    <Divsmall style={{margin:"4%",cursor:"pointer", display:"flex"}}><img src="https://img.icons8.com/material-outlined/20/FFFFFF/user-male-circle.png"/>  <div style={{marginLeft:"30px",}}>MY PROFILE</div></Divsmall> 
    </Divdown>
   </Div>
   
   </>
  )
}

export default Navbar