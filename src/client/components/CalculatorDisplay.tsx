import React, { useState } from 'react'
import '../styles/Calculator.scss'

type DisplayProps = {
  value: string
  onValueChange: (newValue: string) => void
}

const CalculatorDisplay = ({ value, onValueChange }: DisplayProps) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className='calculator__display' onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <input
          type='text'
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        value
      )}
    </div>
  )
}

export default CalculatorDisplay
