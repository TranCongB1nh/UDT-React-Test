import React from 'react'
import '../styles/Calculator.scss'

type ButtonsProps = {
  onButtonClick: (value: string) => void
  displayValue: string
}

const CalculatorButtons = ({ onButtonClick, displayValue }: ButtonsProps) => {
  const clearButtonLabel = displayValue === '0' ? 'AC' : 'C'

  return (
    <div className='calculator__buttons-container'>
      <div className='buttons-container__button dark-gray' onClick={() => onButtonClick(clearButtonLabel)}>
        {clearButtonLabel}
      </div>
      <div className='buttons-container__button dark-gray' onClick={() => onButtonClick('+/-')}>
        +/-
      </div>
      <div className='buttons-container__button dark-gray' onClick={() => onButtonClick('%')}>
        %
      </div>
      <div className='buttons-container__button orange' onClick={() => onButtonClick('÷')}>
        ÷
      </div>

      {/* Number and operation buttons */}
      {[7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, ',', '='].map((btn) => (
        <div
          key={btn}
          className={`buttons-container__button ${btn === 0 && 'zero'} ${typeof btn === 'string' && btn !== ',' ? 'orange' : 'gray'}`}
          onClick={() => onButtonClick(String(btn))}
        >
          {btn}
        </div>
      ))}
    </div>
  )
}

export default CalculatorButtons
