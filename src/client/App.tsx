import React from 'react'
import HelloWorld from './pages/HelloWorld'
import Calculator from './pages/Calculator'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HelloWorld />} />
      <Route path='/calculator' element={<Calculator />} />
    </Routes>
  )
}

export default App
