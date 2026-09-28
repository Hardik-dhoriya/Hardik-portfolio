import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './componets/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />}> </Route>
      </Routes>
    </div>
  )
}

export default App
