// src/components/Calculator__Buttons.tsx
import React from 'react'
import '../styles/Calculator.scss'

type ButtonsProps = {
  onButtonClick: (value: string) => void
}

const CalculatorButtons = ({ onButtonClick }: ButtonsProps) => {
  return (
    <div className='calculator__buttons-container'>
      {/* Row 1 */}
      <div className='buttons-container__button dark-gray' onClick={() => onButtonClick('AC')}>
        AC
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

      {/* Row 2 */}
      <div className='buttons-container__button gray' onClick={() => onButtonClick('7')}>
        7
      </div>
      <div className='buttons-container__button gray' onClick={() => onButtonClick('8')}>
        8
      </div>
      <div className='buttons-container__button gray' onClick={() => onButtonClick('9')}>
        9
      </div>
      <div className='buttons-container__button orange' onClick={() => onButtonClick('×')}>
        ×
      </div>

      {/* Row 3 */}
      <div className='buttons-container__button gray' onClick={() => onButtonClick('4')}>
        4
      </div>
      <div className='buttons-container__button gray' onClick={() => onButtonClick('5')}>
        5
      </div>
      <div className='buttons-container__button gray' onClick={() => onButtonClick('6')}>
        6
      </div>
      <div className='buttons-container__button orange' onClick={() => onButtonClick('-')}>
        -
      </div>

      {/* Row 4 */}
      <div className='buttons-container__button gray' onClick={() => onButtonClick('1')}>
        1
      </div>
      <div className='buttons-container__button gray' onClick={() => onButtonClick('2')}>
        2
      </div>
      <div className='buttons-container__button gray' onClick={() => onButtonClick('3')}>
        3
      </div>
      <div className='buttons-container__button orange' onClick={() => onButtonClick('+')}>
        +
      </div>

      {/* Row 5 */}
      <div className='buttons-container__button gray zero' onClick={() => onButtonClick('0')}>
        0
      </div>
      <div className='buttons-container__button gray' onClick={() => onButtonClick(',')}>
        ,
      </div>
      <div className='buttons-container__button orange' onClick={() => onButtonClick('=')}>
        =
      </div>
    </div>
  )
}

export default CalculatorButtons
