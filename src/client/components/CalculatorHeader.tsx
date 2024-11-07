import React from 'react'
import '../styles/Calculator.scss'

const CalculatorHeader = () => {
  return (
    <div className='calculator__header'>
      <div className='calculator__header-button red'></div>
      <div className='calculator__header-button yellow'></div>
      <div className='calculator__header-button green'></div>
    </div>
  )
}

export default CalculatorHeader
