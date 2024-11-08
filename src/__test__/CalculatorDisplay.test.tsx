import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CalculatorDisplay from '../client/components/CalculatorDisplay'

describe('CalculatorDisplay', () => {
  it('displays the correct value', () => {
    const { getByText } = render(<CalculatorDisplay value="123" onValueChange={() => {}} />)
    expect(getByText('123')).toBe('123')
  })

  it('calls onValueChange when input changes', () => {
    const handleChange = jest.fn()
    const { getByDisplayValue } = render(<CalculatorDisplay value="123" onValueChange={handleChange} />)
    fireEvent.change(getByDisplayValue('123'), { target: { value: '456' } })
    expect(handleChange).toHaveBeenCalledWith('456')
  })
})
