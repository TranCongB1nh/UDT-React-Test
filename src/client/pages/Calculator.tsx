import React, { useState } from 'react'
import '../styles/Calculator.scss'
import CalculatorHeader from '../components/CalculatorHeader'
import CalculatorDisplay from '../components/CalculatorDisplay'
import CalculatorButtons from '../components/CalculatorButtons'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0')

  const handleButtonClick = (value: string) => {
    setDisplayValue(value) // Placeholder for handling button clicks
  }

  return (
    <div className='wrapper'>
      <div className='calculator'>
        <CalculatorHeader />
        <CalculatorDisplay value={displayValue} />
        <CalculatorButtons onButtonClick={handleButtonClick} />
      </div>
    </div>
  )
}

export default Calculator
