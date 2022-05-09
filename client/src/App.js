import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './component/common/Navigation'
import PlantIndex from './component/plants/PlantIndex'
import Home from './component/Home'


const App = () => {
  
  return(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path='/plants' element={<PlantIndex />} />
      <Route exact path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
