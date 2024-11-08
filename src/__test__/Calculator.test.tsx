import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Calculator from '../client/pages/Calculator'

const mockStore = configureStore([])

describe('Calculator Component', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({
      displayValue: '0',
      history: []
    })
  })

  test('renders CalculatorDisplay and CalculatorButtons components', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Calculator />
      </Provider>
    )
    expect(getByText('0')).toBe(0)
    expect(getByText('AC')).toBe('AC')
  })

  test('performs addition and updates display and history', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Calculator />
      </Provider>
    )
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(store.getActions()).toContainEqual(expect.objectContaining({ type: 'UPDATE_DISPLAY', payload: '8' }))
  })
})
