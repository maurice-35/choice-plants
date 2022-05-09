import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './component/common/Navigation'
import PlantIndex from './component/plants/PlantIndex'
import Register from './component/auth/Register'
import Login from './component/auth/Login'
import Home from './component/Home'


const App = () => {
  
  return(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path='/plants' element={<PlantIndex />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
