import React from 'react'
import '../styles/Calculator.scss'

type DisplayProps = {
  value: string
}

const CalculatorDisplay = ({ value }: DisplayProps) => {
  return <div className='calculator__display'>{value}</div>
}

export default CalculatorDisplay
