import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CalculatorButtons from '../client/components/CalculatorButtons'

describe('CalculatorButtons', () => {
  it('renders all buttons correctly', () => {
    const { getByText } = render(<CalculatorButtons onButtonClick={() => {}} displayValue="0" />)
    expect(getByText('AC')).toBe('AC')
    expect(getByText('+')).toBe('+')
    expect(getByText('=')).toBe('=')
  })

  it('calls onButtonClick with correct values when buttons are clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<CalculatorButtons onButtonClick={handleClick} displayValue="0" />)
    fireEvent.click(getByText('AC'))
    expect(handleClick).toHaveBeenCalledWith('AC')
  })
})
