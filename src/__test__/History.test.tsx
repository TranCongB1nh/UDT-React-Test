import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import History from '../client/pages/History'

const mockStore = configureStore([])
const store = mockStore({
  history: ['3 + 5 = 8', '6 * 7 = 42']
})

describe('History', () => {
  it('renders history entries', () => {
    const { getByText } = render(
      <Provider store={store}>
        <History />
      </Provider>
    )
    expect(getByText('3 + 5 = 8')).toBe('3 + 5 = 8')
    expect(getByText('6 * 7 = 42')).toBe('6 * 7 = 42')
  })
})
