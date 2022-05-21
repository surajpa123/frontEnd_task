import { useState } from 'react'


import { Button } from './Button'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import {Routes,Route} from "react-router-dom"
import Knowledge from './Components/Knowledge'
import Members from './Components/Member'
function App() {

  return (
    <div style={{display:"flex"}}>

<Navbar/>
     
      <Routes>

<Route path='/knowledge' element ={<Knowledge/>}></Route>
<Route path='/members' element ={<Members/>}></Route>

<Route path='/' element={ <Content/>}></Route>

  </Routes>
     
  </div>
  )
}

export default App
