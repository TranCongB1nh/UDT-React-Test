import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateDisplay, addHistoryEntry, clearDisplay } from '../redux/actions/calculatorActions'
import CalculatorHeader from '../components/CalculatorHeader'
import CalculatorDisplay from '../components/CalculatorDisplay'
import CalculatorButtons from '../components/CalculatorButtons'

const Calculator = () => {
  const dispatch = useDispatch()
  const displayValue = useSelector((state: any) => state.displayValue)
  const history = useSelector((state: any) => state.history)

  const updateHistory = (newEntry: string) => {
    const currentHistory = JSON.parse(localStorage.getItem('calcHistory') || '[]')

    if (!currentHistory.includes(newEntry)) {
      const updatedHistory = [newEntry, ...currentHistory]
      localStorage.setItem('calcHistory', JSON.stringify(updatedHistory))
      dispatch(addHistoryEntry(newEntry))
    }
  }

  const handleButtonClick = (value: string) => {
    let newDisplayValue = displayValue

    if (value === 'AC' || value === 'C') {
      dispatch(clearDisplay())
    } else if (!isNaN(Number(value)) || value === '.') {
      newDisplayValue = displayValue === '0' ? value : displayValue + value
      dispatch(updateDisplay(newDisplayValue))
    } else if (value === '=') {
      try {
        const expression = displayValue.replace(/×/g, '*').replace(/÷/g, '/')
        const result = eval(expression)
        newDisplayValue = String(result)
        updateHistory(`${displayValue} = ${newDisplayValue}`)
        dispatch(updateDisplay(newDisplayValue))
      } catch {
        dispatch(updateDisplay('Error'))
      }
    }
    // Handle operators
    else {
      newDisplayValue = displayValue + value
      dispatch(updateDisplay(newDisplayValue))
    }
  }

  return (
    <div className='wrapper'>
      <div className='calculator'>
        <CalculatorHeader />
        <CalculatorDisplay
          value={displayValue}
          onValueChange={(newValue: string) => dispatch(updateDisplay(newValue))}
        />
        <CalculatorButtons onButtonClick={handleButtonClick} displayValue={displayValue} />
      </div>
    </div>
  )
}

export default Calculator
