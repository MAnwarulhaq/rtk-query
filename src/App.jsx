import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './components/User.jsx'
import Edituser from './components/Edituser'
import './App.css'
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom'
import Adduser from './components/Adduser'
import Navabr from './components/Navabr.jsx'
function App() {

  return (
    <>
    <BrowserRouter >
    <Navabr/>
    <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/adduser' element={<Adduser/>}/>
      <Route path='/edit/:id' element={<Edituser/>}/>
    </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App
