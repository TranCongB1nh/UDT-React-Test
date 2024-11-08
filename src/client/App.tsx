import React from 'react'
import HelloWorld from './pages/HelloWorld'
import Calculator from './pages/Calculator'
import History from './pages/History'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HelloWorld />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/history' element={<History />}/>
    </Routes>
  )
}

export default App
