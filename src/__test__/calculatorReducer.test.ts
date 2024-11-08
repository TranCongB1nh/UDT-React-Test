import { calculatorReducer } from '../client/redux/reducers/calculatorReducer'
import { UPDATE_DISPLAY, ADD_HISTORY_ENTRY, CLEAR_DISPLAY, LOAD_HISTORY } from '../client/redux/actions/calculatorActions'

describe('Calculator Reducer', () => {
  const initialState = { displayValue: '0', history: [] }

  it('should return the initial state', () => {
    expect(calculatorReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle UPDATE_DISPLAY', () => {
    const action = { type: UPDATE_DISPLAY, payload: '123' }
    const expectedState = { ...initialState, displayValue: '123' }
    expect(calculatorReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle ADD_HISTORY_ENTRY', () => {
    const action = { type: ADD_HISTORY_ENTRY, payload: '3 + 3 = 6' }
    const expectedState = { ...initialState, history: ['3 + 3 = 6'] }
    expect(calculatorReducer(initialState, action)).toEqual(expectedState)
  })
})
